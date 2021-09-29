document.addEventListener("DOMContentLoaded", function() {
	let BreathingHalftone=window.BreathingHalftone;
	let particlesJS=window.particlesJS;
	let ava=document.querySelector('.ava');new BreathingHalftone(ava,
			{
			  // ----- dot size ----- //
			  dotSize: 1/80,
			  // size of dots
			  // as a fraction of the diagonal of the image
			  // smaller dots = more dots = poorer performance

			  dotSizeThreshold: 0.01,
			  // hides dots that are smaller than a percentage

			  initVelocity: 1,
			  // speed at which dots initially grow

			  oscPeriod: 5,
			  // duration in seconds of a cycle of dot size oscilliation or 'breathing'

			  oscAmplitude: 0.05,
			  // percentage of change of oscillation

			  // ----- color & layout ----- //

			  isAdditive: true,
			  // additive is black with RGB dots,
			  // subtractive is white with CMK dots

			  isRadial: false,
			  // enables radial grid layout

			  channels: [ 'lum' ],
			  // layers of dots [ 'red', 'green', 'blue' ]
			  // 'lum' is another supported channel, for luminosity

			  isChannelLens: true,
			  // disables changing size of dots when displaced

			  // ----- behavior ----- //

			  friction: 0.7,
			  // lower makes dots easier to move, higher makes it harder

			  hoverDiameter: 0.3,
			  // size of hover effect
			  // as a fraction of the diagonal of the image

			  hoverForce: -0.02,
			  // amount of force of hover effect
			  // negative values pull dots in, positive push out

			  activeDiameter: 0.2,
			  // size of click/tap effect
			  // as a fraction of the diagonal of the image

			  activeForce: 0.3
			  // amount of force of hover effect
			  // negative values pull dots in, positive push out
			});

	particlesJS.load('particles-js', './js/particlesjs-config.json', function() {
  	console.log('callback - particles.js config loaded');
	});
        
});

