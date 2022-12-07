<script>
	// @ts-nocheck

	import * as d3 from 'd3';
	import * as topojson from 'topojson-client';
	import { onMount } from 'svelte';

	// scale of the globe (not the canvas element)
	var scaleFactor = 1;
	// autorotation speed
	var degPerSec = -20;
	// start angles
	var angles = { x: -0, y: 40, z: 0 };
	// colors
	var colorWater = '#F3DFC1';
	var colorLand = '#E0C9A6';
	var colorText = '#FAF9F6';
	let canvas;
	let projection;
	var lastTime = d3.now();
	var degPerMs = degPerSec / 1000;
	let PIXEL_RATIO;
	/**
	 * @type {number}
	 */
	var width, height;
	var land;
	var autorotate, now, diff, rotation;
	let context;
	let water = { type: 'Sphere' };
	let swag = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[-154.1063709756795, 50.64557923115647],
							[-147.9514969623199, -8.46489215570596],
							[-138.0760462386463, -7.964735038890772],
							[-139.5138940017945, 18.16612542343869],
							[-132.7446073753133, -8.045367405805832],
							[-123.0646437370356, -8.12595948442869],
							[-132.7016318759379, 19.50058311715809],
							[-121.6832731027221, 24.01934809502636],
							[-117.8606866169593, 31.50121554827037],
							[-117.3390561980899, 45.50496774110793],
							[-154.1063709756795, 50.64557923115647]
						]
					]
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[-102.8191825056056, -8.91547229812989],
							[-99.34497237079022, 15.75131554953226],
							[-77.10519850077222, 36.39028233681032],
							[-86.14186361392865, 42.31098436362799],
							[-102.0973291033491, 22.00344649408051],
							[-105.4346265945476, 46.57044195369156],
							[-114.745886198767, 44.62616725945576],
							[-107.0879315954007, 17.21058342145642],
							[-110.2829775260705, -7.723101413801542],
							[-102.8191825056056, -8.91547229812989]
						]
					]
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[-80.11645479906937, -9.668479949805187],
							[-72.9199099918349, 13.08064034432712],
							[-64.10479354683872, 12.34334997290698],
							[-65.12757981190417, -9.62088703198386],
							[-53.50124146199182, -11.12466301767694],
							[-55.01970327968893, 35.67843527525643],
							[-70.29630656984304, 37.0212563850399],
							[-88.7395427661232, -7.861341625004265],
							[-80.11645479906937, -9.668479949805187]
						]
					]
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[-44.73965154875613, -12.40712664420675],
							[-41.73233211914377, 9.587752841916643],
							[-31.55241989658444, -14.78040657132231],
							[-6.165967456653819, 32.18745172367859],
							[-18.711170955125, 34.02000013954598],
							[-32.53549505998658, -5.488512784945313],
							[-44.24675697938946, 34.97546282906694],
							[-48.83431705898327, -10.74156985616719],
							[-44.73965154875613, -12.40712664420675]
						]
					]
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[11.86124549487999, 29.02571318177918],
							[5.537328782963257, -19.26935127333279],
							[22.26307969001917, -19.87109706628904],
							[20.90802896657236, -2.730811997057768],
							[31.50784737246105, -21.77506685781289],
							[52.93421807916219, -21.26448950900287],
							[31.10667808499006, 1.733130430335265],
							[47.5188407615168, 6.946598191733928],
							[45.66721732882245, 27.61256329858707],
							[11.86124549487999, 29.02571318177918]
						]
					]
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[71.2109177964861, 25.02752791668121],
							[49.70697979361038, 25.94121530317937],
							[55.04266072860177, -21.33649462542974],
							[69.68345193359347, -21.91526272409449],
							[68.94184050298152, -12.6157496510684],
							[60.53357124576115, -12.2782699046131],
							[60.04859299092539, -2.931039526703343],
							[65.6238238335147, -3.22820438678372],
							[65.7100746997191, 0.894536330636203],
							[59.80626521225398, 2.414444945417067],
							[59.35656144431772, 15.3365634538528],
							[72.04281434746184, 15.7988045649502],
							[71.2109177964861, 25.02752791668121]
						]
					]
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[80.81843811514962, -23.56234613869145],
							[89.3320691634067, 2.577790171041172],
							[97.96740114528491, -12.55816427613435],
							[108.2954893183542, -0.3719158812838339],
							[106.7206704696513, -23.80287841013023],
							[119.7804870367991, -25.96088568217141],
							[114.78564278056, 24.68689271714525],
							[98.2956342983372, -4.615961151777533],
							[84.11107866830446, 24.32133989615754],
							[74.81994506641168, -22.76182838078906],
							[80.81843811514962, -23.56234613869145]
						]
					]
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[129.9119317519113, -28.56570132943285],
							[131.165829436548, -12.21229370983605],
							[135.2901967278717, -13.02691296112427],
							[135.6249916071666, -25.77100628003038],
							[149.2398967614068, -27.16317343638983],
							[129.8707375633118, 23.8908484053269],
							[123.7483343905269, -24.60159758518628],
							[129.9119317519113, -28.56570132943285]
						]
					]
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[155.076102216217, 21.4534423873417],
							[153.5843894661787, -26.29752218973216],
							[170.8580180410509, -28.83390891142634],
							[170.1102938123033, -18.58143021815216],
							[161.4247387747971, -17.63417468719009],
							[161.3002146093099, 21.45518212783162],
							[155.076102216217, 21.4534423873417]
						]
					]
				}
			},
			{
				type: 'Feature',
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[186.690773066113, -30.41099758690558],
							[187.1272465126772, -5.865683428441403],
							[197.920921169991, 7.004260370983983],
							[191.390742492559, 12.6353566613132],
							[182.9664139978237, -1.965997957030276],
							[174.4219730346603, 13.72929646667681],
							[167.8576815946506, 9.921033078487474],
							[178.2852945389223, -4.806719771550054],
							[178.4512797514925, -29.01512813411744],
							[186.690773066113, -30.41099758690558]
						]
					]
				}
			}
		]
	};
	let path;
	let father;

	onMount(async () => {
		const response = await d3.json('https://unpkg.com/world-atlas@1/world/110m.json');
		console.log(response);
		land = topojson.feature(response, response.objects.land);
		PIXEL_RATIO = window.devicePixelRatio;

		canvas = d3.select('#globe');

		context = canvas.node().getContext('2d');
		father = document.getElementById('father');

		//canvas.attr('width', 50).attr('height', 50);
		

		projection = d3.geoOrthographic().precision(0.1);
		path = d3.geoPath(projection).context(context);

		setAngles();

		window.addEventListener('resize', scale);
		//projection.scale(scaleFactor * Math.max(width, height / 2)).translate([width, height]);
		scale();

		autorotate = d3.timer(rotate);
	});

	//
	// Functions
	//

	function setAngles() {
		var rotation = projection.rotate();
		rotation[0] = angles.y;
		rotation[1] = angles.x;
		rotation[2] = angles.z;
		projection.rotate(rotation);
	}

	function scale() {
		//width = document.documentElement.clientWidth / 2;
		//height = document.documentElement.clientHeight / 6;
		height = 50 * PIXEL_RATIO;
		width = 50 * PIXEL_RATIO;
		//canvas.attr('width', width * 2).attr('height', height * 2);
		projection.scale(scaleFactor * Math.max(width * PIXEL_RATIO, height / 2 * PIXEL_RATIO)).translate([width * PIXEL_RATIO, height * PIXEL_RATIO]);
		render();
	}

	function render() {
		context.clearRect(0, 0, 200, 200);
		fill(water, colorWater);
		fill(land, colorLand);
		fillText(swag, colorText);
	}

	function fill(obj, color) {
		context.beginPath();
		path(obj);
		context.fillStyle = color;
		context.fill();
	}

	function fillText(obj, color) {
		context.beginPath();
		path(obj);
		context.strokeStyle = color;
		context.stroke();
	}

	function rotate(elapsed) {
		now = d3.now();
		diff = now - lastTime;
		if (diff < elapsed) {
			rotation = projection.rotate();
			rotation[0] += diff * degPerMs;
			projection.rotate(rotation);
			render();
		}
		lastTime = now;
	}
</script>

<div id="fathers">
	<canvas id="globe" />
</div>

<style>
	#globe {
		float: left;
		clip-path: circle(200px at 50% 50%);
	}
</style>
