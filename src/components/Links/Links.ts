import './Links.scss';
import { Panel } from '../Panels/PanelControl';
import { Toggler } from './Toggler';
import Dialog, { DialogAdapterOptions } from '@nextgis/dialog';
import { Controls } from '../../Controls';
import pkg from '../../../package.json';

import './img/nextgis.png';
import { App } from 'src/App';
import { SliderOptions } from '../SliderControl';
import { aboutShortRu } from './aboutRu';
import { aboutShortEn } from './aboutEn';

function getBaseLayerToggler(controls: Controls) {
  const baseLayer = 'baselayer';
  const baseLayerToggler = new Toggler({
    className: 'baselayer__toggler',
    title: 'Скрыть подложку',
    titleOff: 'Показать подложку',
    toggleAction: status => {
      if (status) {
        controls.app.webMap.showLayer(baseLayer);
      } else {
        controls.app.webMap.hideLayer(baseLayer);
      }
    }
  });
  return baseLayerToggler;
}

function openDialog(options: DialogAdapterOptions) {
  const dialog = new Dialog(options);

  const isSame = options && options.template && dialog.options.template === options.template;
  if (!isSame) {
    dialog.updateContent(options.template);
  }
  dialog.show();
  return dialog;
}

interface SliderSettings {
  name: keyof SliderOptions;
  label: string;
  type: 'number';
}

function getYearsToggler(controls: Controls) {
  const yearsStatPanelControl = controls.yearsStatPanelControl;
  if (yearsStatPanelControl) {
    const yearsToggler = new Toggler({
      className: 'years__toggler',
      title: 'Скрыть панель изменения в территориальном составе',
      titleOff: 'Показать панель изменения в территориальном составе',
      toggleAction: status => {
        if (status) {
          yearsStatPanelControl._blocked = false;
          yearsStatPanelControl.show();
        } else {
          yearsStatPanelControl.hide();
          yearsStatPanelControl._blocked = true;
        }
      }
    });
    yearsStatPanelControl.emitter.on('toggle', status => {
      yearsToggler.toggle(status);
    });
    return yearsToggler;
  }
}

function getPeriodToggler(controls: Controls) {
  const periodsPanelControl = controls.periodsPanelControl;
  if (periodsPanelControl) {
    const periodToggler = new Toggler({
      className: 'period__toggler',
      title: 'Скрыть панель правителей',
      titleOff: 'Показать панель правителей',
      toggleAction: status => {
        if (status) {
          periodsPanelControl.show();
        } else {
          periodsPanelControl.hide();
        }
      }
    });

    periodsPanelControl.emitter.on('toggle', status => {
      periodToggler.toggle(status);
    });
    return periodToggler;
  }
}

function getLegendToggler(controls: Controls) {
  const legendPanel = controls.legendPanel;
  if (legendPanel) {
    const legendToggler = new Toggler({
      className: 'legend__toggler',
      title: 'Скрыть легенду',
      titleOff: 'Показать легенду',
      toggleAction: status => {
        if (status) {
          legendPanel.show();
        } else {
          legendPanel.hide();
        }
      }
    });

    legendPanel.emitter.on('toggle', status => {
      legendToggler.toggle(status);
    });
    return legendToggler;
  }
}

export function getSwitcherPanelControl(controls: Controls) {
  const block = document.createElement('div');
  block.className = 'switcher-panel-control';

  const toggles: Array<Toggler | undefined> = [
    getLegendToggler(controls),
    getPeriodToggler(controls),
    getYearsToggler(controls),
    getBaseLayerToggler(controls)
  ];

  toggles.forEach(t => t && block.appendChild(t.getContainer()));

  const panel = new Panel({
    addClass: 'panel-links'
  });
  panel.updateBody(block);
  return panel;
}

export function getSocialLinksPanel() {
  const block = document.createElement('div');
  block.innerHTML = `
    <div class="social-links">
      <a href="http://twitter.com/runivers" class="social__logo twitter"></a>
      <a href="http://www.facebook.com/Runiverse.ru" class="social__logo facebook"></a>
      <a href="http://vk.com/public35690973" class="social__logo vkontakte"></a>
    </div>
  `;
  // <a href="http://runivers.livejournal.com/" class="social__logo livejournal"></a>

  const panel = new Panel({
    addClass: 'panel-links'
  });
  panel.updateBody(block);
  return panel;
}

function getAboutBlock(block: string) {
  return `
    <P LANG="en-GB" CLASS="western" ALIGN=JUSTIFY STYLE="margin-bottom: 0.17in">
      <SPAN LANG="ru-RU">${block}</SPAN>
    </P>`;
}

export function openAboutDialog(app: App, language: string = 'ru') {
  const attrs = app.webMap.getAttributions({ onlyVisible: false, onlyBasemap: true });
  const templates: Record<string, string> = {
    ru: aboutShortRu,
    en: aboutShortEn
  };
  let template = templates[language];
  if (attrs.length) {
    let str = language === 'ru' ? 'Использована картографическая подложка: ' : 'The basemap used: ';
    attrs.forEach(x => {
      str += x;
    });
    template += getAboutBlock(str);
  }
  const html = document.createElement('div');
  html.innerHTML = template;
  const languageSwitcher = html.getElementsByClassName('switch-about-language-btn')[0] as HTMLAnchorElement;
  if (languageSwitcher) {
    languageSwitcher.onclick = () => {
      Dialog.clean();
      openAboutDialog(app, languageSwitcher.name);
    };
  }
  openDialog({ template: html });
}

export function getAboutProjectLink(app: App) {
  const block = document.createElement('a');
  block.className = 'about_icon';
  block.setAttribute('href', '#');
  block.innerHTML = `i`;
  block.onclick = () => {
    openAboutDialog(app, 'ru');
  };

  return block;
}

export function openSettingsDialog(app: App) {
  const template = document.createElement('div');

  // link to blog
  const header = document.createElement('div');
  header.className = 'settings-dialog__header';
  header.innerHTML = `
    <h2>Настройки</h2>
  `;
  template.appendChild(header);

  // settings input
  const s = app.slider;
  const settings: SliderSettings[] = [
    { name: 'animationDelay', label: 'Задержка анимации, мс', type: 'number' },
    { name: 'step', label: 'Шаг изменения года', type: 'number' },
    { name: 'animationStep', label: 'Шаг изменения года (анимация)', type: 'number' }
  ];

  settings.forEach(x => {
    const id = x.name + '-' + Math.round(Math.random() * 10000);
    const inputBlock = document.createElement('label');
    inputBlock.className = 'settings-dialog__input-block';
    inputBlock.innerHTML = `<div class="settings-dialog__input-block--label">${x.label}: </div>
      <input class="${id}" class=type=${x.type} value=${s.options[x.name]}>
      </input>
    `;
    const input = inputBlock.getElementsByClassName(id)[0] as HTMLInputElement;
    input.addEventListener('input', () => {
      const value = x.type === 'number' ? parseInt(input.value, 10) : input.value;
      Object.defineProperty(s.options, x.name, { value, enumerable: true });
    });

    template.appendChild(inputBlock);
  });

  // editable legend
  const legend = app.controls.legendPanel && app.controls.legendPanel.createLegendBlock(true);
  if (legend) {
    template.appendChild(legend);
  }

  // link to blog
  const readMore = document.createElement('div');
  readMore.className = 'settings-dialog__read-more';
  readMore.innerHTML = `
    Описание технической реализации проекта доступно по
    <a href="http://nextgis.ru/blog/runivers/" target="_blank">ссылке</a>.
    <div>v.${pkg.version}</div>
  `;
  template.appendChild(readMore);

  openDialog({ template });
}

export function getAffiliatedLinks(app: App): HTMLElement {
  const block = document.createElement('div');
  block.innerHTML = `
  <a href="https://www.runivers.ru"
    title="Электронная  энциклопедия и библиотека Руниверс"
    class="affiliated-logo runiver__logo__min" target="_blank"
  ></a>
  <a href="https://histgeo.ru/laboratory.html"
    class="affiliated-logo laboratory__logo__min" target="_blank"
    title="Лаборатория исторической геоинформатики"
  ></a>
  <a href="https://www.transneft.ru"
    class="affiliated-logo transneft__logo__min" target="_blank"
    title="ПАО «Транснефть»"
  ></a>
  <a href="https://nextgis.ru"
    class="affiliated-logo nextgis__logo__min" target="_blank"
    title="Разработка ГИС и проекты"
  ></a>
  <a href="#" class="affiliated-logo settings__logo__min" target="_blank" title="Настройки"></a>
  `;

  const settings = block.getElementsByClassName('settings__logo__min')[0] as HTMLElement;
  if (settings) {
    settings.onclick = e => {
      e.preventDefault();
      openSettingsDialog(app);
    };
  }
  return block;
}

export function getAffiliatedPanel(controls: Controls) {
  const block = getAffiliatedLinks(controls.app);

  const panel = new Panel({
    addClass: 'panel-links'
  });
  panel.updateBody(block);
  return panel;
}

export function getHomeBtnControl(control: Controls) {
  const _control = control.app.webMap.createButtonControl({
    addClass: 'mapboxgl-ctrl-icon mapboxgl-ctrl-home',
    onClick: () => control.app.options.bounds && control.app.webMap.fitBounds(control.app.options.bounds)
  });

  return _control;
}

export function getTimelineButton() {
  const link = document.createElement('a');
  link.className = 'panel__toggler graph_logo';
  link.setAttribute('href', 'https://www.runivers.ru/granitsy-rossii/charts/index.php');
  link.setAttribute('title', 'График изменения территории России');
  link.setAttribute('target', '_blank');
  return link;
}
