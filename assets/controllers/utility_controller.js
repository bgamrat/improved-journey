import { Controller } from '@hotwired/stimulus';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
	connect() {
		const CONTENT_TYPES = '/api/ezp/v2/content/types';
		const OPTIONS = { headers: {'Accept': 'application/json,application/vnd.ez.api.ContentTypeInfo+json,application/vnd.ez.api.ContentTypeInfoList+json'}};
		fetch(CONTENT_TYPES,OPTIONS).then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		}).then(json => {
			const ContentType = json.ContentTypeInfoList.ContentType;
			const DL = document.createElement("dl");
			let output = [];
			ContentType.forEach(e => {
				output.push(e.identifier);
			});
			this.element.textContent = output.join('\n');
		});
	}
}
