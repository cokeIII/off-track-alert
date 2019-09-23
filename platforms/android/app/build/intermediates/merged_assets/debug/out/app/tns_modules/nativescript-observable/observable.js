import { Observable as NObservable } from 'tns-core-modules/data/observable';
var Observable = /** @class */ (function (_super) {
    __extends(Observable, _super);
    function Observable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Observable.prototype.onListenerAdded = function (eventName, count) { };
    Observable.prototype.onListenerRemoved = function (eventName, count) { };
    Observable.prototype.addEventListener = function (eventNames, callback, thisArg) {
        _super.prototype.addEventListener.call(this, eventNames, callback, thisArg);
        var events = eventNames.split(',');
        for (var i = 0, l = events.length; i < l; i++) {
            var event_1 = events[i].trim();
            var list = this._getEventList(event_1);
            this.onListenerAdded(event_1, list ? list.length : 0);
        }
    };
    Observable.prototype.removeEventListener = function (eventNames, callback, thisArg) {
        _super.prototype.removeEventListener.call(this, eventNames, callback, thisArg);
        var events = eventNames.split(',');
        for (var i = 0, l = events.length; i < l; i++) {
            var event_2 = events[i].trim();
            var list = this._getEventList(event_2);
            this.onListenerRemoved(event_2, list ? list.length : 0);
        }
    };
    return Observable;
}(NObservable));
export default Observable;
//# sourceMappingURL=observable.js.map