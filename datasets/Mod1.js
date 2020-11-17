G.AddData({
name:'That other dataset',
author:'Me, Myself And I',
desc:'another dataset for Legacy.',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
func:function()
{
	
//Retrieve all current resources and write my new ones in. Or just .push. I would just paste the default then add my own but that would break compatibility with other mods. Is this an object or what?
	G.resCategories['advanced']={
		name:'Advanced Materials',
		base:['advanced metal', 'circuitry component', 'advnaced compund'],
		side:[],
	},
	
	/*
	=====================
	Resources
	===================*/
	//Categories First
	new G.res({
		name:'advanced compound',
		desc:'Advanced materials such as [silicon] used to create [circutitry component,circuitry] and [computer]s',
		//category:'',			Uneeded?
	},
	
	new G.res({
		name:'circuitry component',
		desc:'A collection of various transistors, capacitors, resistors, inductors and diodes you need for computing. Is used to make [circuit]s.',
		partOf:'',
		category:'',
	},
	
	new G.res({
		name:'advanced alloy',
		desc:'[advanced alloy] is an alloy of /*Stuff*/ and stuff',
		partOf:'',
		category:'',
	},
	
	
	
	//Now new base resources (used to make other stuff)
	
	new G.res({
		name:'silicon'
		desc:'[silicon] is an advandced compound derived from [sand], although its not easy to extract, requiring multiple peices of heavy machinery. Nothing is every that simple is it?',
		icon:[0,0],
		partOf:'advanced compounds',
		category:'advanced',
	},
	
	new G.res({
		name:'solder', //3 parts tin(soft metal. 2 parts lead. Will have to use ores as they belong to the same category of ingot, soft. This means all other alloys will hve to use ores which is fine.
		desc:'[solder] is used to join [circuitry component]s to [circuit board]s. Has a melting point of around 150C celsius ',
		partOf:'',
		category:'',
	},
	
	new G.res({
		name:'silver solder', //65% silver. 20% copper 15% zinc.
		desc:'An advandced form of solder that contains no [lead ore, lead]',
		partOf:'',
		category:'',
	},
	
	new G.res({
		name:'',
		desc:'',
		partOf:'',
		category:'',
	},
	
	new G.res({
		name:'circuitry component',
		desc:'A collection of various transistors, capacitors, resistors, inductors and diodes you need for computing. Is used to make [circuit]s.',
		partOf:'',
		category:'',
	},
	
	/*==================================
	Augmenting stuff
	===================================*/
		//make mines mine for silver
	G.getDict('mine').modes['hot sauce']={name:'Make hot sauce',desc:'Turn 3 [hot pepper]s and 3 [herb]s into 1 [hot sauce].',req:{'hot sauce preparing':true},use:{'knapped tools':1}};
	G.getDict('mine').effects.push({type:'gather',context:'mine',amount:5,max:10,every:3,mode:'quarry'}});
	G.getDict('rocky substrate').res['mine']['silver']=1;
	
//Note To Self: Don't Change that
},
})
/*
-----------------------
TODO
-----------------------

Resources
	silicon
	advanced aalooys
		bronze
		electrum
		
	silver
	alloysmleter
	arc furnace
	coke furnace/oven
	
	circuits
	advnaced circuits
	computer
	circuit board

	lead ore and mining for lead.
	
	
	About Silicon
	Will have a process involved in making it.
	First seperate it fom sand (amnd dirt?, lower sucess rate tho.)
	Then combine it with coke which is coal gone through a coke oven/furnace
	https://www.popsci.com/diy/article/2005-10/making-silicon-sand/
	
		new G.Res({
		name:'hot pepper',
		desc:'[hot pepper]s are loaded with capsaicin and, depending on who you ask, may produce a pleasant burn when eaten.',
		icon:[0,0,'spicySheet'],
		turnToByContext:{'eat':{'health':0.01,'happiness':0.03},'decay':{'spoiled food':0.5}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
	});
	
	
	
	
	
	*/
	