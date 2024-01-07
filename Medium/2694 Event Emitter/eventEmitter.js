class EventEmitter {
    
    constructor(){
        this.subscribers = {}
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        
        if(!eventName) return

        this.subscribers[eventName] = this.subscribers[eventName] || []
        this.subscribers[eventName].push(callback)

        return {
            unsubscribe: () => {
              this.subscribers[eventName] = this.subscribers[eventName]?.filter(cb => cb!==callback)
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const currentEventSubscribers = this.subscribers[eventName] || []
        return currentEventSubscribers.map((cb)=> cb.call(this, ...args)) || []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */