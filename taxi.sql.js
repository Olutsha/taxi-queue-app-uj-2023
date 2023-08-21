import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();
export async function joinQueue() {
    db.run('update passenger_queue_count set passenger_queue_count = +1')
}

export async function leaveQueue() {
db.run('update passenger_queue_count set passenger_queue_count = -1')
}

export async function joinTaxiQueue() {
//    taxiQueue ++
}

export async function queueLength() {
    
    // if (queue.length > 0) {
    //     queue.pop();
    // }
    // return queue

}

export async function taxiQueueLength() {
    // return taxiQueue
}

export async function taxiDepart() {
    // if (this.queue.length >= 12) {
    //     this.taxiQueue.pop(); 
    //     for (let i = 0; i < 12; i++) {
    //         this.queue.pop(); 
    //     }
    // }
}