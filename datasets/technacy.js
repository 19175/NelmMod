G.AddData({
name:'That other dataset',
author:'Me, Myself And I',
desc:'another dataset for Legacy.',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
func:function()
{
	
//Retrieve all current resources and write my new ones in. Or just .push. I would just paste the default then add my own but that would break compatibility with other mods. Is this an js object or what, a custom object? I havn't come across anything like it in my time doing javascript (which is about 4 months but, still, googling disin't help)
	G.resCategories['advanced']={
		name:'Advanced Materials',
		base:['advanced metal', 'circuitry component', 'advnaced compund'],
		side:[],
	},
	
	/*
	=====================
	Resources
	===================*/
	//Add these first else you end up with missing resources I think.
	
			new G.Res({
				name:'solder',
				desc:'[solder] is an intesting alloy of [tin ore, Tin] and [lead ore, Lead]. It has a very low melting point making it perfect for joining [CIRCUIT]s together.',
				icon:[9,5]
				category:'',
			});
			
			new G.Res({
				name:'silver solder',
				desc:'Just like [solder], [silver solder] has a very low melting point but unlike [solder] it doesn\'t contain any lead so is therefore less poisonus. Wether this has any effect on your people is yet to become apparent. It does apear to be more conductive though.',
				icon:[9,5]
				category:'',
			});
			
			new G.Res({
				name:'silicon',
				desc:'[silicon] is a very useful and abundant resource that is used as asemi-conductor in transitors to co-construct complicated... OK, in short, it is very good for making computery stuff.',
				icon:[9,5]
				category:'',
			});
			
			new G.Res({
				name:'silicon crystal',
				desc:'A crystalised and 100% pure* form of silicon. Perfect for actually putting in [CIRCUITRY].<>WARNING: May contain traces of: sand, dairy, gluten, amines, text editor, Git, HC, fruit, modding, herbs, more sand, coal, oxygen and WARNING stickers.//*Not certified by the Official Assocition of Silicon(and other assorted elements) Certification and Verification',
				icon:[9,5]
				category:'',
			});
	/*==================================
	Augmenting stuff
	===================================*/
	
	
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
	
