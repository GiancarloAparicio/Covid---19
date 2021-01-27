import ControlsMapSvg from '../molecules/ControlsMapSvg';
import country from 'world-map-country-shapes';
import React, { Component } from 'react';
import '../../scss/mapWorldControl.scss';
import svgPanZoom from 'svg-pan-zoom';
import '../../scss/mapWorld.scss';
import Hammer from 'hammerjs';

class MapWorld extends Component {
	constructor(props) {
		super()

		this.mapSvg = React.createRef();
		this.zoomIn = React.createRef();
		this.zoomOut = React.createRef();
		this.zoomReset = React.createRef();

		this.state = {
			selectedCountry: { PE: true },
		};
	}

	beforePan = function (oldPan, newPan) {
		let gutterWidth = 100;
		let gutterHeight = 100;
		let sizes = this.getSizes();

		let leftLimit =
			-((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) +
			gutterWidth;

		let rightLimit =
			sizes.width - gutterWidth - sizes.viewBox.x * sizes.realZoom;

		let topLimit =
			-((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) +
			gutterHeight;

		let bottomLimit =
			sizes.height - gutterHeight - sizes.viewBox.y * sizes.realZoom;

		let customPan = {};
		customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x));
		customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y));

		return customPan;
	};

	componentDidMount() {
		let eventsHandler = {
			haltEventListeners: [
				'touchstart',
				'touchend',
				'touchmove',
				'touchleave',
				'touchcancel',
			],

			init: function (options) {
				var instance = options.instance,
					initialScale = 1,
					pannedX = 0,
					pannedY = 0;

				this.hammer = Hammer(options.svgElement, {
					inputClass: Hammer.SUPPORT_POINTER_EVENTS
						? Hammer.PointerEventInput
						: Hammer.TouchInput,
				});

				this.hammer.get('pinch').set({ enable: true });

				this.hammer.on('doubletap', function (ev) {
					instance.zoomIn();
				});

				this.hammer.on('panstart panmove', function (ev) {
					if (ev.type === 'panstart') {
						pannedX = 0;
						pannedY = 0;
					}

					instance.panBy({ x: ev.deltaX - pannedX, y: ev.deltaY - pannedY });
					pannedX = ev.deltaX;
					pannedY = ev.deltaY;
				});

				this.hammer.on('pinchstart pinchmove', function (ev) {

					if (ev.type === 'pinchstart') {
						initialScale = instance.getZoom();
						instance.zoomAtPoint(initialScale * ev.scale, {
							x: ev.center.x,
							y: ev.center.y,
						});
					}

					instance.zoomAtPoint(initialScale * ev.scale, {
						x: ev.center.x,
						y: ev.center.y,
					});
				});

				options.svgElement.addEventListener('touchmove', function (e) {
					e.preventDefault();
				});
			},

			destroy: function () {
				this.hammer.destroy();
			},
		};

		let mapWorld = svgPanZoom(this.mapSvg.current, {
			panEnabled: true,
			zoomEnabled: true,
			controlIconsEnabled: false,
			zoomScaleSensitivity: 0.3,
			minZoom: 1,
			maxZoom: 10,
			fit: false,
			contain: true,
			center: true,
			refreshRate: 'auto',
			beforePan: this.beforePan,
			customEventsHandler: eventsHandler,
		});

		this.zoomIn.current.addEventListener('click', () => mapWorld.zoomIn());
		this.zoomOut.current.addEventListener('click', () => mapWorld.zoomOut());
		this.zoomReset.current.addEventListener('click', () => mapWorld.resetZoom());
	}

	toggleCountry = (country) => {
		this.props.setCountry(country.id);

		const { selectedCountry } = this.state;

		this.setState({
			selectedCountry: {
				[country.id]: !selectedCountry[country.id],
			},
		});
	};

	render() {
		const { selectedCountry } = this.state;

		const mapCountries = country.map((country) => (
			<path
				key={country.id}
				d={country.shape}
				style={
					this.props.theme === 'dark'
						? {
							fill: selectedCountry[country.id]
								? '#4479E9'
								: 'white',
							cursor: 'pointer',
							stroke: '#ccc',
						}
						: {
							fill: selectedCountry[country.id]
								? '#dd6b20'
								: '#1F2028',
							cursor: 'pointer',
							stroke: '#ccc',
						}
				}
				onClick={() => this.toggleCountry(country)}
			/>
		));
		return (
			<div className='mapSVG'>
				<svg
					className='worldSVG'
					xmlns='http://www.w3.org/2000/svg'
					height='400'
					width='800'
					viewBox='0 0 2000 1001'
					ref={this.mapSvg}>
					{mapCountries}
				</svg>

				<ControlsMapSvg zoomIn={this.zoomIn} zoomOut={this.zoomOut} zoomReset={this.zoomReset} />

			</div>
		);
	}
}


export default MapWorld;
