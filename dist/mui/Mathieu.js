var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
var Mathieu = /** @class */ (function (_super) {
    __extends(Mathieu, _super);
    function Mathieu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mathieu.prototype.render = function () {
        return (React.createElement("div", null,
            "Coucou ",
            this.props.message));
    };
    return Mathieu;
}(React.Component));
export default Mathieu;
