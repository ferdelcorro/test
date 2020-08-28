import * as tslib_1 from "tslib";
import React from "react";
/**
 * MyButton.
 *
 * @param {ButtonProps} props button's props
 * @returns {React.FC<ButtonProps>} Button.
 */
export var HelloWorld = function (_a) {
    var onClick = _a.onClick, children = _a.children, props = tslib_1.__rest(_a, ["onClick", "children"]);
    return (React.createElement("button", tslib_1.__assign({}, props, { onClick: onClick }), children));
};
//# sourceMappingURL=HelloWorld.js.map