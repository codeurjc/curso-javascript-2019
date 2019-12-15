type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' }

function counter(state = 0, action: Action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
counter(0, { type: 'INCREMENT' })
// 1
counter(0, { type: 'DECREMENT' })

let action: Action = { type: 'INCREMENT' }; 
counter(0, action)
// 1
counter(0, { type: 'DECREMENT' })

//----------------------------------------

type Animal = "dog" | "cat";

function DoStuff(animal:Animal) {
    if(animal === "fish")
        return;
}