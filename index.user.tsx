/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/naming-convention */

import {h as _h, render} from 'nano-jsx';
import * as NProgress from 'nprogress';

const NProgressStyleStatic = `
/* https://github.com/rstacruz/nprogress/blob/master/nprogress.css */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 8px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 25px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 25px;
  height: 25px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

type IPlaceSummary = {
	data: {
		nmapSummaryBusiness: {
			id: string;
			name: string;
			businessType: string;
			subType: any;
			oilPrices: any[];
			indoor: any;
			x: string;
			y: string;
			imageMarker: {
				marker: string;
				markerSelected: string;
			};
			indoorPanorama: any;
			streetPanorama: {
				id: string;
				lat: string;
				lon: string;
				fov: string;
				tilt: string;
				pan: string;
			};
			interiorPanorama: any;
			insidePanorama: any;
			labels: {
				booking: boolean;
				delivery: boolean;
				nPay: boolean;
				nPayPromotion: boolean;
				talktalk: boolean;
				onSale: boolean;
				takeout: boolean;
			};
			category: string;
			broadcastInfo: any;
			description: any;
			tags: any;
			michelinGuide: any;
			microReview: any;
			datalabKeyword: any;
			promotionTitle: any;
			address: string;
			displayAddress: string;
			roadAddress: string;
			businessHours: any;
			daysOff: any;
			price: any;
			bookingReviewCountText: any;
			visitorReviewCountText: any;
			bookingReviewCount: any;
			blogReviewCount: any;
			distance: string;
			bookingStats: any;
			visitorReviewScore: any;
			oilPrimaryPrice: any;
			oilSubPrice: any;
			has360VR: any;
			buttons: {
				phone: any;
				booking: any;
				bookmark: any;
				talktalk: any;
				route: string;
				share: any;
				navigation: string;
			};
			images: string[];
			imageCount: number;
			popularMenuImages: any;
			beautyStyles: any;
			refFields: string[];
		};
	};
};

type ISiteSummary = {
	id: number;
	isSite: boolean;
	name: string;
	type: string;
	rCode: string;
	x: number;
	y: number;
	posExact: boolean;
	address: string;
	fullAddress: string;
	addressAbbr: string;
	roadAddr: {
		text: string;
		abbrText: string;
		additionalText: string;
	};
	fullRoadAddress: string;
	phone: string;
	isCallLink: number;
	description: string;
	way: string;
	keywords: string[];
	hasNaverTalktalkUrl: boolean;
	naverTalktalkUrl: string;
	adult: string;
	endPageUrl: string;
	mobileEndPageUrl: string;
	urlList: Array<{
		type: string;
		url: string;
		landingUrl?: string;
		mUrl?: string;
		mLandingUrl?: string;
		isDeadUrl?: boolean;
	}>;
	ktCallMd: string;
	ppc: string;
	images: Array<{
		type: string;
		groupName: string;
		number: number;
		url: string;
		source: any;
		desc: string;
		modDate: string;
	}>;
	imageURL: string;
	imageModDate: string;
	displayCategory: string;
	category: string;
	categories: string[];
	categoryPaths: string[][];
	bizHour: Array<{
		type: string;
		startTime: string;
		endTime: string;
		description: string;
		isDayOff: boolean;
	}>;
	bizhourInfo: string;
	options: Array<{
		id: number;
		name: string;
		isCheck: string;
		order: number;
		iconURL: string;
		desc: string;
	}>;
	menus: Array<{
		name: string;
		price: string;
		isRecommended: boolean;
		change: boolean;
	}>;
	menuImages: Array<{
		type: string;
		imageUrl: string;
	}>;
	previewImages: Array<{
		type: string;
		groupName: string;
		number: number;
		url: string;
		source: any;
		desc: string;
		modDate: string;
	}>;
	streetPanorama: {
		id: string;
		escapedId: string;
		fov: number;
		latitude: number;
		longitude: number;
		pan: number;
		tilt: number;
	};
	skyPanorama: {
		id: string;
		escapedId: string;
		fov: number;
		latitude: number;
		longitude: number;
		pan: number;
		tilt: number;
	};
	insidePanorama: any;
	interiorPanorama: any;
	indoorPanorama: any;
	entranceCoords: {
		car: Array<{
			rep: boolean;
			x: number;
			y: number;
		}>;
		walk: Array<{
			rep: boolean;
			x: number;
			y: number;
		}>;
	};
	theme: Record<string, unknown>;
	hasNaverBooking: boolean;
	naverBookingUrl: string;
	naverbookingId: string;
	petrolInfo: any;
	michelinGuide: any;
	broadcastInfo: any;
	marker: string;
	markerSelected: string;
	datalab: any;
	reviewCount: number;
	dynamicData: any;
	markerLabel: {
		text: any;
		style: string;
	};
	isParkingSupported: boolean;
};

(async () => {
	let thisWindow = window;

	// Define dependencies
	const kMutationObserver = window.MutationObserver;
	const kPromise = window.Promise;
	const kXMLHttpRequest = window.XMLHttpRequest;
	const kFetch = window.fetch;

	// Grant unsafeWindow
	if (typeof unsafeWindow === 'undefined') {
		console.log('Failed to grant unsafeWindow');
	} else {
		thisWindow = unsafeWindow;
	}

	// Wait for DOM parsed
	await new kPromise(resolve => {
		if (document.readyState !== 'loading') {
			resolve(null);
		}

		document.addEventListener('readystatechange', () => {
			resolve(null);
		});
	});

	// Prepare NProgress
	const aStyle = document.createElement('style');
	aStyle.innerText = NProgressStyleStatic;

	thisWindow.document.head.appendChild(aStyle);

	// Cache
	let recentlyClickedSite: ISiteSummary;

	// Initiate an XHR proxy
	thisWindow.XMLHttpRequest = new Proxy(
		kXMLHttpRequest,
		{
			construct(target, argArray, newTarget) {
				const xhr: XMLHttpRequest = Reflect.construct(target, argArray, newTarget);
				const prioritizedResponseCallbacks: Array<(ev: ProgressEvent) => void | Promise<void>> = [];
				const responseCallbacks: Array<(ev: ProgressEvent) => void> = [];

				xhr.addEventListener = new Proxy(
					xhr.addEventListener,
					{
						apply(target, thisArg, argArray) {
							const [eventName, callback] = argArray as [string, typeof responseCallbacks[number]];

							if (eventName !== 'load') {
								return Reflect.apply(target, thisArg, argArray) as void;
							}

							responseCallbacks.push(callback);
						},
					},
				);

				xhr.onload = initialEvent => {
					kPromise.all(prioritizedResponseCallbacks.map(callback => callback(initialEvent)))
						.finally(() => {
							for (const callback of responseCallbacks) {
								callback(initialEvent);
							}
						});
				};

				xhr.onload = new Proxy(
					xhr.onload ?? (() => null),
					{
						set(target, p, newValue, receiver) {
							responseCallbacks.push(newValue);

							return true;
						},
					},
				);

				xhr.open = new Proxy(
					xhr.open,
					{
						apply(target, thisArg, argArray) {
							const [, url] = argArray as [string, string];

							if (url.includes('v5/api/place/summary')) {
								// @ts-expect-error One-time
								recentlyClickedSite = undefined;

								prioritizedResponseCallbacks.push(async _ => {
									NProgress.start();

									const placeSummary = JSON.parse(xhr.responseText) as IPlaceSummary;
									const response = await kFetch(`/v5/api/sites/summary/${placeSummary.data.nmapSummaryBusiness.id}?lang=ko`);
									const data = await response.json() as ISiteSummary;

									recentlyClickedSite = data;
								});
							}

							// Open the connection
							Reflect.apply(target, thisArg, argArray);
						},
					},
				);

				return xhr;
			},
		},
	);

	// Initiate an observer instance
	const observer = new kMutationObserver(records => {
		for (const record of records) {
			if (!record.addedNodes.length) {
				continue;
			}

			for (const addedNode of record.addedNodes) {
				const kRoot = addedNode.parentElement?.parentElement;
				const kRecentlyClickedSite = recentlyClickedSite;

				if (
					kRoot?.nodeName === 'SUMMARY-PLACE'
					&& typeof kRecentlyClickedSite !== 'undefined'
				) {
					observer.disconnect();
					NProgress.done();

					const kTextArea = kRoot.querySelector('.text_wrap.ng-star-inserted');

					if (!kTextArea) {
						return;
					}

					/* eslint-disable @typescript-eslint/no-unsafe-return */
					const InlineHeader = ({text}: {text: string}) => (
						<h4 style={{
							fontSize: '16px',
						}}>{text}</h4>
					);

					const InlineParagraph = ({text}: {text: string}) => (
						<p style={{
							fontSize: '14px',
						}}>{text}</p>
					);

					const getHour = (text: string) => parseInt(text.split(':')[0], 10);

					const getTotalWorkingTime = (_start: string, _end: string) => {
						const start = getHour(_start);
						const end = getHour(_end);

						if (start > end) {
							return (24 - start) + end;
						}

						return end - start;
					};

					const WorkingTime = () => {
						if (!kRecentlyClickedSite.bizHour) {
							return <InlineParagraph text='운영 시간이 없는 이곳, 제법 젠틀해요.' />;
						}

						return <div>
							{
								kRecentlyClickedSite.bizHour.length > 0 && kRecentlyClickedSite.bizHour.map(hour => {
									const totalWorkingTime = getTotalWorkingTime(hour.startTime, hour.endTime);

									if (!totalWorkingTime) {
										return (
											<InlineParagraph text={`${hour.type} (휴일)`} />
										);
									}

									return (
										<InlineParagraph text={`${hour.type} ${hour.startTime}~${hour.endTime} (${totalWorkingTime}시간)`} />
									);
								})
							}
						</div>;
					};

					const InlineComponent = () => {
						const workingTime = Object.values(kRecentlyClickedSite.bizHour).reduce((before, hour) => {
							const fullTime = getTotalWorkingTime(hour.startTime, hour.endTime);

							if (!fullTime) {
								return before;
							}

							return {
								count: before.count + 1,
								time: before.time + fullTime,
							};
						}, {count: 0, time: 0});

						return (
							<div style={{
								paddingTop: '12px',
								lineHeight: '1.6em',
							}}>
								<InlineHeader text={`운영시간 (${workingTime.count}일 평균 ${(workingTime.time / workingTime.count).toFixed(1)}시간)`} />
								<WorkingTime />
							</div>
						);
					};
					/* eslint-enable @typescript-eslint/no-unsafe-return */

					const virtualRoot = document.createElement('div');

					render(
						<InlineComponent />,
						virtualRoot,
					);
					kTextArea.appendChild(virtualRoot);

					return;
				}
			}
		}
	});

	// Take over
	thisWindow.document.documentElement.addEventListener('click', () => {
		observer.observe(thisWindow.document.documentElement, {
			subtree: true,
			childList: true,
		});
	}, true);
})();
