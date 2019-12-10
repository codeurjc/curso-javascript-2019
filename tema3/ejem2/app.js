require("google-closure-library");

goog.require("goog.structs.PriorityQueue");

var queue = new goog.structs.PriorityQueue();

queue.enqueue(1,'value1_p1');
queue.enqueue(3,'value2_p3');
queue.enqueue(2,'value3_p2');
queue.enqueue(1,'value4_p1');

while(queue.getCount() > 0){
    console.log(queue.dequeue());
}

// value1_p1 value4_p1 value3_p2 value2_p3