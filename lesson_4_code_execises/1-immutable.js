// ----------------------------------------------------------

// IMMUTABLE JS EXERCISE

// ----------------------------------------------------------

// run this in a browser
<script src="https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.min.js"></script>

<script>
	// Getting and Setting values
    const map1 = Immutable.Map({a: 1, b: 2, c: 3 });
    const map2 = map1.set('b', 50);
    map1.get('b'); // 2
    map2.get('b'); // 50
    console.log(map2.get('b'))
    
    // equality check
    map1.equals(map2); // false
    console.log(map1.equals(map2))
    
    // Use with ordinary objects
    const state1 = Immutable.Map({ a: 1, b: 2, c: 3, d: 4 });
	const state2 = Immutable.Map({ c: 10, a: 20, t: 30 });
	const obj = { d: 100, o: 200, g: 300 };
	const map3 = state1.merge(state2, obj);
    console.log(map3)
    
    // If you open the returned object, you can see that it isn't an ordinary object
	// you'll find all the properties under "entries"
</script>