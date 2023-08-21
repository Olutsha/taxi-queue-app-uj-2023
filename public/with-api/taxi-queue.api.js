document.addEventListener('alpine:init', () => {

    Alpine.data('TaxiQueue', () => {

        return {
            version: 'no-api-1.0',
            queue: [],
            taxiQueue:[],
                    joinQueue() {
                        this.queue.push('name');
                    },
                    leaveQueue() {
                        if (this.queue.length > 0) {
                            this.queue.pop();
                        }
                    },
                    queueLength() {
                        return this.queue.length;
                    },
                    joinTaxiQueue() {
                        this.taxiQueue.push('Taxiz');
                    },

                    taxiQueueLength() {
                    return this.taxiQueue.length;
                    },

                    taxiDepart() {
                        if (this.queue.length >= 12) {
                            this.taxiQueue.pop(); 
                            for (let i = 0; i < 12; i++) {
                                this.queue.pop(); 
                            }
                        }
                    }
                }
    });

});





