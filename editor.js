/* Project view creation functions */
function displayProject(project, element) {
	Array.from(element.children).forEach(child => {
		element.removeChild(child)
	})
	project.scenes.forEach(scene => {
		const sceneElement = createElement(Elements.scene)
		displayScene(scene, project,sceneElement)
		element.appendChild(sceneElement)
	})
}

function displayScene(scene, project, element) {
	element.id = scene.petrichorId
	element.appendChild(setText(scene.name,createElement(Elements.sceneName)))
	scene.objects.forEach(objectId => {
		const objectElement = createElement(Elements.object)
		displayObject(getObjectById(objectId,project),project,objectElement)
		element.appendChild(objectElement)
	})
}

function displayObject(object,project,element) {
	element.id = object.petrichorId
	element.appendChild(setText(object.name,createElement(Elements.objectName)))
	displayRulesList(object.rules,project,element, new Set())
}

function displayRulesList(rules, project, element, alreadyDisplayedCustomRuleInstances) {
	rules.forEach(ruleId => {
		element.appendChild(createElementWithDisplayedRuleById(ruleId,project, alreadyDisplayedCustomRuleInstances))
	})
}

function createElementWithDisplayedRuleById(ruleId, project, alreadyDisplayedCustomRuleInstances) {
	const rule = getCustomRuleInstanceOrRuleById(ruleId,project)
	if (!isCustomRuleInstance(rule)) {
		const element = createElement(Elements.rule)
		displayRule(rule,project,element)
		return element
	}
	const element = createElement(Elements.customRuleInstance)
	displayCustomRuleInstance(rule,project,element,alreadyDisplayedCustomRuleInstances)
	return element
}

function displayRule(rule, project, element) {
	element.id = rule.petrichorId
	const ruleBlockElement = createElement(Elements.ruleBlock)
	ruleBlockElement.appendChild(setText("When",createElement(Elements.ruleWhen)))
	if (rule.parameters) {
		const parametersElement = createElement(Elements.parameters)
		displayParametersList(rule.parameters,project,parametersElement)
		ruleBlockElement.appendChild(parametersElement)
	}
	element.appendChild(ruleBlockElement)
	const abilityElement = createElement(Elements.ability)
	displayAbility(getAbilityById(rule.abilityID,project),project,abilityElement,new Set())
	element.appendChild(abilityElement)
}

function displayRuleBlockTypeIfNecessary(operator, project, element) {
	const maybeDisplayText = displayTextOrNullForRuleType(operator.type)
	if (maybeDisplayText == null)
		return
	element.appendChild(setText(maybeDisplayText,createElement(Elements.operatorDescription)))
}

function displayCustomRuleInstance(customRuleInstance, project, element, alreadyDisplayedCustomRuleInstances) {
	if (alreadyDisplayedCustomRuleInstances.has(customRuleInstance.id))
		return
	alreadyDisplayedCustomRuleInstances.add(customRuleInstance.id)
	element.id = customRuleInstance.petrichorId
	const customRule = getCustomRuleById(customRuleInstance.customRuleID, project)
	element.appendChild(setText(customRule.name,createElement(Elements.customRuleName)))
	const parametersElement = createElement(Elements.parameters)
	displayParametersList(customRuleInstance.parameters,project,parametersElement)
	element.appendChild(parametersElement)
	displayRulesList(customRule.rules,project,element,alreadyDisplayedCustomRuleInstances)
}

function displayParametersList(parameters, project, element) {
	parameters.forEach(parameter => {
		const parameterElement = createElement(Elements.parameter)
		parameterElement.id = parameter.petrichorId
		const keyElement = createElement(Elements.parameterKey)
		keyElement.innerText = parameter.key
		parameterElement.appendChild(keyElement)
		if (parameter.datum) {
			displayDatum(parameter.datum,project,parameterElement)
		} else if (parameter.variable) {
			// This is a bit of a hack, but since regular variables will
			//      be a datum with the `variable` key, this should work
			displayDatum(parameter,project,parameterElement)
		} else {
			const bubbleElement = createElement(Elements.bubble)
			bubbleElement.innerText = parameter.value
			parameterElement.appendChild(bubbleElement)
		}
		element.appendChild(parameterElement)
	})
}

function displayDatum(datum, project, element) {
	if (datum.variable) {
		let variable = getVariableById(datum.variable,project)
		if (variable)
			return displayVariable(variable,project,element)
		//Event parameters are similar enough to traits
		return displayTrait(getEventParameterById(datum.variable,project),project,element)
	}
	if (isTrait(datum))
		return displayTrait(datum,project,element)
	if (isLocalVariable(datum))
		return displayLocalVariable(datum,project,element)
	displayOperatorBlock(datum,project,element)
}

function displayOperatorBlock(block, project, element) {
	const blockElement = createElement(Elements.operator)
	blockElement.id = block.petrichorId
	if (block.params) {
		const parametersElement = createElement(Elements.parameters)
		displayParametersList(block.params,project,parametersElement)
		blockElement.appendChild(parametersElement)
	} else {
		blockElement.appendChild(setText(block.description,createElement(Elements.operatorDescription)))
	}
	displayRuleBlockTypeIfNecessary(block,project,blockElement)
	element.appendChild(blockElement)
}

function displayVariable(variable, project, element) {
	const variableElement = createElement(Elements.variable)
	variableElement.id = variable.petrichorId
	const objectID = variable.HSTraitObjectIDKey
	if (objectID) {
		const objectReferenceElement = createElement(Elements.objectReference)
		objectReferenceElement.appendChild(setText(getObjectById(objectID,project).name,document.createElement("span")))
		variableElement.appendChild(objectReferenceElement)
	} else if (variable.type == HSBlockType.Object) {
		const objectReferenceElement = createElement(Elements.objectReference)
		objectReferenceElement.appendChild(setText("Self",document.createElement("span")))
		variableElement.appendChild(objectReferenceElement)
	} else {
		variableElement.appendChild(setText(emojiForVariableType(variable.type),createElement(Elements.variableType)))
	}
	variableElement.appendChild(setText(variable.name,createElement(Elements.variableName)))
	element.appendChild(variableElement)
}

function displayTrait(trait,project,element) {
	const traitElement = createElement(Elements.trait)
	traitElement.id = trait.petrichorId
	const objectID = trait.HSTraitObjectIDKey
	if (objectID) {
		const objectReferenceElement = createElement(Elements.objectReference)
		objectReferenceElement.appendChild(setText(getObjectById(objectID,project).name,document.createElement("span")))
		traitElement.appendChild(objectReferenceElement)
	} else if (trait.HSTraitObjectParameterTypeKey == HSBlockType.Self) {
		const objectReferenceElement = createElement(Elements.objectReference)
		objectReferenceElement.appendChild(setText("Self",document.createElement("span")))
		traitElement.appendChild(objectReferenceElement)
	}
	//TODO: Get this from type to prevent liars
	traitElement.appendChild(setText(trait.description,createElement(Elements.traitName)))
	element.appendChild(traitElement)
}

function displayAbility(ability,project,element,alreadyDisplayedAbilities) {
	if(!ability) {
		console.error("No ability")
		return
	}
	if (alreadyDisplayedAbilities.has(ability.abilityID))
		return
	alreadyDisplayedAbilities.add(ability.abilityID)
	element.id = ability.petrichorId
	ability.blocks.forEach(block => {
		const blockElement = createElement(Elements.block)
		displayBlock(block,project,blockElement,alreadyDisplayedAbilities)
		element.appendChild(blockElement)
	})
}

function displayBlock(block, project, element, alreadyDisplayedAbilities) {
	element.id = block.petrichorId
	//TODO: Base this off the block id if possible to avoid liars
	element.appendChild(setText(block.description,createElement(Elements.blockDescription)))
	if (block.parameters) {
		const parametersElement = createElement(Elements.parameters)
		displayParametersList(block.parameters,project,parametersElement)
		element.appendChild(parametersElement)
	}
	if (block.controlScript && block.controlScript.abilityID) {
		const innerAbilityElement = createElement(Elements.ability)
		displayAbility(getAbilityById(block.controlScript.abilityID,project),project,innerAbilityElement,alreadyDisplayedAbilities)
		element.appendChild(innerAbilityElement)
	}
	if (block.controlFalseScript && block.controlFalseScript.abilityID) {
		const ability = getAbilityById(block.controlFalseScript.abilityID,project)
		if (ability) {
			const innerAbilityElement = createElement(Elements.ability)
			displayAbility(ability,project,innerAbilityElement,alreadyDisplayedAbilities)
			element.appendChild(innerAbilityElement)
		}
	}
}

function displayLocalVariable(datum, project, element) {
	element.appendChild(setText(datum.name,createElement(Elements.localVariable)))
}

/* General DOM helpers */
function setText(text,element) {
	element.innerText = text
	return element
}

const Elements = {
	scene: "div.petrichor-hs-scene",
	object: "div.petrichor-hs-object",
	rule: "div.petrichor-hs-rule",
	ruleBlock: "div.petrichor-hs-rule-block",
	ruleWhen: "span.petrichor-hs-rule-when-text",
	customRuleInstance: "div.petrichor-hs-custom-rule-instance",
	ability: "div.petrichor-hs-ability",
	parameters: "span.petrichor-hs-parameter-list",
	parameter: "span.petrichor-hs-parameter",
	parameterKey: "span.petrichor-hs-parameter-key",
	bubble: "span.petrichor-hs-bubble",
	operator: "span.petrichor-hs-operator.petrichor-hs-bubble",
	operatorDescription: "span.petrichor-hs-operator-description",
	variable: "span.petrichor-hs-variable.petrichor-hs-bubble",
	localVariable: "span.petrichor-hs-local-variable.petrichor-hs-variable.petrichor-hs-bubble",
	trait: "span.petrichor-hs-trait.petrichor-hs-bubble",
	objectReference: "span.petrichor-hs-object-reference.petrichor-hs-bubble",
	block: "div.petrichor-hs-block",
	sceneName: "span.petrichor-hs-scene-name",
	objectName: "span.petrichor-hs-object-name",
	customRuleName: "span.petrichor-hs-custom-rule-name",
	variableType: "span.petrichor-hs-variable-type",
	variableName: "span.petrichor-hs-variable-name",
	traitName: "span.petrichor-hs-trait-name",
	blockDescription: "span.petrichor-hs-block-description"
}

function createElement(elementType, extraClassNames) {
	const components = elementType.split(".")
	const tagName = components.shift()
	const classNames = components.concat(extraClassNames || [])
	const element = document.createElement(tagName)
	classNames.forEach(name => {
		element.classList.add(name)
	})
	return element
}

/* General JSON manipulation */
function getObjectById(objectId, project) {
	return project.objects.find(o=>o.objectID == objectId)
}

function getCustomRuleInstanceOrRuleById(ruleId, project) {
	const customRuleInstance = getCustomRuleInstanceById(ruleId,project)
	if (customRuleInstance)
		return customRuleInstance
	return getRuleById(ruleId,project)
}

function getCustomRuleInstanceById(id,project) {
	return project.customRuleInstances.find(e=>e.id==id)
}

function getRuleById(id, project) {
	return project.rules.find(e=>e.id==id)
}

function isCustomRuleInstance(unknownObject) {
	//This differentiates custom rule instances from rules
	return !!unknownObject.customRuleID
}

function getAbilityById(id, project) {
	return project.abilities.find(e=>e.abilityID==id)
}

function getCustomRuleById(id, project) {
	return project.customRules.find(e=>e.id == id)
}

function isTrait(unknownObject) {
	return !!unknownObject.HSTraitTypeKey
}

function getVariableById(id, project) {
	return project.variables.find(e=>e.objectIdString == id)
}

function getEventParameterById(id, project) {
	return project.eventParameters.find(e=>e.id == id)
}

function emojiForVariableType(type) {
	switch (type) {
		case HSBlockType.Game:
			return "▶️"
		case HSBlockType.Self:
			return "Self"
		case HSBlockType.OriginalObject:
			return "Original Object"
		case HSBlockType.Local: //"fake" local
			return "LOCAL"
		case HSBlockType.User:
			return "📱"
		case HSBlockType.Product:
			return "🎁"
		case HSBlockType.Scoped: //Actual local
			return ""
		case HSBlockType.Object:
			return ""
		default:
			return HSBlockType[type]
	}
}

function displayTextOrNullForRuleType(type) {
	switch (type) {
		case HSBlockType.EventOperatorTap:
			return "is tapped"
		case HSBlockType.EventOperatorHold:
			return "is pressed"
		case HSBlockType.EventOperatorSwipeRight:
			return "is swiped right"
		case HSBlockType.EventOperatorSwipeLeft:
			return "is swiped left"
		case HSBlockType.EventOperatorSwipeUp:
			return "is swiped up"
		case HSBlockType.EventOperatorSwipeDown:
			return "is swiped down"
		case HSBlockType.EventOperatorNotPressed:
			return "is not pressed"
		default:
			return null
	}
}

function isLocalVariable(datum) {
	return datum.type == HSBlockType.Scoped
}