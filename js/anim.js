var showBall = new ui.Tween({
    values: {
        y: 0,
        opacity: 1
    }
});

var trackBall = new ui.Track({
    values: {
        x: {},
        y: {}
    }
});

var springBack = new ui.Simulate({
    simulate: 'spring',
    spring: 500,
    friction: 0.2,
    values: {
        x: {
            to: 0
        },
        y: {
            to: 0
        }
    }
});


var animate = function(element){
	
	var $div = $('#' + element),
		item3 = new ui.Actor({
		element: '#' + element,
		values: {
			y: 100
		}
	});

	item3
		.start(showBall.extend({
			duration: 1000,
			ease: 'backOut'
		}))
		.then(function () {
			$div.on('mousedown', item3.element, function (event) {
				event.stopPropagation();
				event.preventDefault();

				item3.start(trackBall, event);

				$div.on('mouseup', function () {
					item3.start(springBack);
				});
			});
		});
};



var element = 'animItem';

for (id = 0; id < 50; id++) { 
	animate(element+id);
}



/* Animacao dos dados pessoais */

function documentHeight() {
    return Math.max(
        document.documentElement.clientHeight,
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
    );
}

function documentWidth() {
    return Math.max(
        document.documentElement.clientWidth,
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth
    );
}

var runAnim = function(b,f,x,v,a,my, mx ,target) {

    var pessoal = new ui.Actor(target);

    var trackPessoal = new ui.Track({
        values: {
            x: {},
            y: {}
        }
    });

    var simulationpessoalini = new ui.Simulate({
        values: {
            y: {
                velocity: 1100,
                acceleration: a,
                max: my,
                bounce: b//.1
            },
            x: {
                velocity: v,
                friction: f,
                to: x,
                max: mx
            }
        }
    });
    var simulationpessoal = new ui.Simulate({
        values: {
            y: {
                velocity: 100,
                acceleration: 1800,
                max: documentHeight() * 0.8,
                bounce: b
            },
            x: {
                friction: 0.02,
                to: 0
            }
        }
    });

    if(target == '.pessoal') {
       pessoal.start(simulationpessoalini);  //animacao inicial
    }

    $('body').on('mousedown', target, function (e) {
        e.preventDefault();

        pessoal.start(trackPessoal, e);
        /*usa o mesmo do ball*/

        $('body').one('mouseup', function (e) {
            e.preventDefault();
            pessoal.start(simulationpessoal);
        });
    });
};

runAnim(0.7, 0.009,0,630, 1200, 15, documentWidth()* 0.8, '.linkedin');
runAnim(0.75, 0.0115,0,740, 1400, 15,(documentWidth() * 0.8) - 40,'.lattes');
runAnim(0.8, 0.008,0, 555, 1600,15, (documentWidth()* 0.8) - 80,  '.email');
runAnim(0.8, 0.01,0,460, 1800, documentHeight() * 0.8, documentWidth() * 0.6, '.pessoal');

/* fim dados pessoais */

