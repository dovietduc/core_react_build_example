export const Store = {

    state: {
        counter: 0
    },

    // action change sate
    increment: function() {
        this.state.counter++;
    },
    decrement: function() {
        this.state.counter--;
    }
}