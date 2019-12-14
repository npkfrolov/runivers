import '../img/city.png';

import { Map } from 'mapbox-gl';
import { EventEmitter } from 'events';
import { Events } from '@nextgis/utils';

import { App } from '../App';

import { TimeLayer, TimeLayersGroupOptions } from '../TimeMap/TimeGroup';

export class CitiesLayer implements TimeLayersGroupOptions {
  emitter = new EventEmitter();
  name!: string;
  baseUrl!: string;
  opacity = 1;
  simplification = 8;
  private events: Events;

  constructor(protected app: App, options: Partial<TimeLayersGroupOptions>) {
    Object.assign(this, options);
    this.events = new Events(this.emitter);
    this.app.webMap.onLoad().then(() => this._registerMapboxImages());
  }

  addLayers(url: string, id: string) {
    return this._createTimeLayers(url, id);
  }

  private _registerMapboxImages() {
    const map: Map | undefined = this.app.webMap.mapAdapter.map;
    if (map) {
      map.loadImage('images/city.png', (er: Error, image: ImageData) => {
        map.addImage('city', image);
        this.emitter.emit('load-images');
      });
    }
  }

  private _createTimeLayers(
    url: string,
    id: string
  ): Array<Promise<TimeLayer>> {
    // const sourceLayer = 'ngw:' + id;
    const sourceLayer = id;
    const label = this.events.onLoad('load-images').then(() => {
      const layer = this.app.webMap.addLayer('MVT', {
        url,
        id,
        // name: id,
        paint: {
          'text-color': 'rgba(255, 255, 255, 1)',
          'text-halo-color': 'rgba(49, 67, 90, .9)',
          'text-halo-width': 1
        },
        layout: {
          'icon-image': 'city',
          'icon-allow-overlap': true,
          'icon-optional': true,
          'text-field': ['to-string', ['get', 'toponym']],
          'text-anchor': 'top',
          'text-size': 10,
          'text-font': ['Open Sans Semibold'],
          'text-variable-anchor': ['top'],
          'text-radial-offset': 0.95,
          'text-line-height': 1.1,
          'text-letter-spacing': 0.06,
          'text-padding': 0,
          'text-justify': 'auto'
        },
        type: 'icon',
        nativePaint: true,
        sourceLayer
      });
      return layer.then(x => {
        return x;
      });
    }) as Promise<TimeLayer>;

    return [
      // layer,
      label
    ];
  }
}