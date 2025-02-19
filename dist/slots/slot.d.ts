import { Featurizer } from '../featurizers';
/**
 * An extension of featurizer that holds a value in its state.
 * @abstract
 */
export declare class Slot<Value> extends Featurizer {
    /**
     * The list of actions that can be taken by the model only when the slot is defined.
     */
    private dependantActions;
    /**
     * The list of actions that can be taken by the model only when the slot is undefined.
     */
    private invDependantActions;
    /**
     * Stores the value of the slot.
     */
    private value;
    /**
     * @param dependantActions The list of actions that can be taken by the model
     *                         only when the slot is defined.
     * @param invDependantActions The list of actions that can be taken by the model
     *                            only when the slot is undefined.
     */
    constructor(dependantActions: string[], invDependantActions: string[]);
    getActionMask(): boolean[];
    resetDialog(): void;
    /**
     * Retrieves the value of the slot.
     */
    getValue(): Value;
    /**
     * Redefine a new value for the slot.
     */
    setValue(value: Value): void;
}
