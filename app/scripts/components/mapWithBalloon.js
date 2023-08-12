const mapWithBalloon = () => {
  if (typeof ymaps === 'undefined') return;

  ymaps.ready(() => {
    const mapNode = document.getElementById('map_with_balloon');

    if (!mapNode) return;

    const coords = mapNode.dataset.coordinates.split(',');

    const map = new ymaps.Map(mapNode, {
      center: coords,
      zoom: 12,
    });

    const points = JSON.parse(document.getElementById('points').textContent);

    const pointCollection = new ymaps.GeoObjectCollection();

    const balloonTemplate = document
      .getElementById('balloon')
      .content.cloneNode(true)
      .querySelector('.balloon').outerHTML;

    const convertedPlacemark = "data:image/svg+xml,%3csvg width='30' height='36' viewBox='0 0 30 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M24.0814 3.35502C22.3838 1.96503 20.3989 0.969116 18.2698 0.439108C16.1407 -0.0909 13.9206 -0.14179 11.7694 0.29011C9.00352 0.857175 6.45892 2.20736 4.43873 4.17983C2.41854 6.15229 1.00792 8.6639 0.374911 11.4155C-0.258102 14.167 -0.0868262 17.0426 0.868335 19.6995C1.8235 22.3565 3.52228 24.6829 5.76233 26.4016C8.31986 28.2735 10.4974 30.6154 12.1785 33.3022L13.324 35.2069C13.4695 35.4488 13.6751 35.649 13.9208 35.788C14.1665 35.927 14.444 36 14.7263 36C15.0087 36 15.2862 35.927 15.5319 35.788C15.7776 35.649 15.9832 35.4488 16.1287 35.2069L17.2267 33.3774C18.6906 30.804 20.6867 28.5726 23.0816 26.832C24.9595 25.5399 26.5115 23.8292 27.6151 21.8347C28.7186 19.8402 29.3436 17.6166 29.4408 15.3392C29.5379 13.0618 29.1044 10.7931 28.1746 8.71188C27.2449 6.63069 25.8442 4.79404 24.0831 3.34684L24.0814 3.35502ZM14.7247 21.2749C13.4301 21.2749 12.1646 20.891 11.0882 20.1718C10.0118 19.4525 9.1729 18.4303 8.67749 17.2342C8.18207 16.0382 8.05245 14.7221 8.30501 13.4524C8.55757 12.1827 9.18096 11.0165 10.0964 10.1011C11.0118 9.18566 12.1781 8.56226 13.4477 8.30971C14.7174 8.05715 16.0335 8.18677 17.2295 8.68218C18.4256 9.17759 19.4478 10.0165 20.1671 11.0929C20.8863 12.1693 21.2702 13.4348 21.2702 14.7294C21.2702 16.4654 20.5806 18.1302 19.353 19.3577C18.1255 20.5853 16.4607 21.2749 14.7247 21.2749Z' fill='%231E3D65'/%3e%3ccircle cx='14.5833' cy='14.5833' r='11.25' fill='%231E3D65'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7 7.34247C10.3635 7.326 12.1048 7.33559 12.555 7.34247L15.0208 16.4998L17.4242 7.34247H23L19.8988 16.7506C19.7122 16.5164 19.4884 16.3672 19.275 16.2249C19.1994 16.1745 19.1251 16.125 19.0543 16.0729C19.0413 15.7717 19.0021 13.2902 19.0905 13.0714C19.1551 12.9111 19.1798 12.7375 19.093 12.5855C18.9435 12.3234 18.6756 12.3288 18.3175 12.3361C18.2556 12.3374 18.1909 12.3387 18.1238 12.3387C18.0671 12.3387 18.0096 12.3375 17.9525 12.3361C17.605 12.3284 17.2657 12.3208 17.1429 12.6019C17.0587 12.7949 17.0997 12.9034 17.1512 13.0395C17.1604 13.064 17.1701 13.0895 17.1793 13.1164C17.2061 13.194 17.2012 14.2025 17.1972 15.029C17.1948 15.5219 17.1928 15.9502 17.1979 16.0776C17.1738 16.092 17.1508 16.1056 17.1289 16.1186C16.7901 16.3195 16.6935 16.3768 16.4423 16.6542C15.8465 17.3122 15.8769 18.3552 15.9065 19.3733C15.9126 19.5837 15.9186 19.7929 15.9193 19.9975L15.9247 23.3334H12.2363L7 7.34247Z' fill='white'/%3e%3c/svg%3e";

    const convertedPlacemarkActive = "data:image/svg+xml,%3csvg width='30' height='36' viewBox='0 0 30 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M24.0814 3.35502C22.3838 1.96503 20.3989 0.969116 18.2698 0.439108C16.1407 -0.0909 13.9206 -0.14179 11.7694 0.29011C9.00352 0.857175 6.45892 2.20736 4.43873 4.17983C2.41854 6.15229 1.00792 8.6639 0.374911 11.4155C-0.258102 14.167 -0.0868262 17.0426 0.868335 19.6995C1.8235 22.3565 3.52228 24.6829 5.76233 26.4016C8.31986 28.2735 10.4974 30.6154 12.1785 33.3022L13.324 35.2069C13.4695 35.4488 13.6751 35.649 13.9208 35.788C14.1665 35.927 14.444 36 14.7263 36C15.0087 36 15.2862 35.927 15.5319 35.788C15.7776 35.649 15.9832 35.4488 16.1287 35.2069L17.2267 33.3774C18.6906 30.804 20.6867 28.5726 23.0816 26.832C24.9595 25.5399 26.5115 23.8292 27.6151 21.8347C28.7186 19.8402 29.3436 17.6166 29.4408 15.3392C29.5379 13.0618 29.1044 10.7931 28.1746 8.71188C27.2449 6.63069 25.8442 4.79404 24.0831 3.34684L24.0814 3.35502ZM14.7247 21.2749C13.4301 21.2749 12.1646 20.891 11.0882 20.1718C10.0118 19.4525 9.1729 18.4303 8.67749 17.2342C8.18207 16.0382 8.05245 14.7221 8.30501 13.4524C8.55757 12.1827 9.18096 11.0165 10.0964 10.1011C11.0118 9.18566 12.1781 8.56226 13.4477 8.30971C14.7174 8.05715 16.0335 8.18677 17.2295 8.68218C18.4256 9.17759 19.4478 10.0165 20.1671 11.0929C20.8863 12.1693 21.2702 13.4348 21.2702 14.7294C21.2702 16.4654 20.5806 18.1302 19.353 19.3577C18.1255 20.5853 16.4607 21.2749 14.7247 21.2749Z' fill='%23FF5500'/%3e%3ccircle cx='14.5833' cy='14.5833' r='11.25' fill='%23FF5500'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7 7.34247C10.3635 7.326 12.1048 7.33559 12.555 7.34247L15.0208 16.4998L17.4242 7.34247H23L19.8988 16.7506C19.7122 16.5164 19.4884 16.3672 19.275 16.2249C19.1994 16.1745 19.1251 16.125 19.0543 16.0729C19.0413 15.7717 19.0021 13.2902 19.0905 13.0714C19.1551 12.9111 19.1798 12.7375 19.093 12.5855C18.9435 12.3234 18.6756 12.3288 18.3175 12.3361C18.2556 12.3374 18.1909 12.3387 18.1238 12.3387C18.0671 12.3387 18.0096 12.3375 17.9525 12.3361C17.605 12.3284 17.2657 12.3208 17.1429 12.6019C17.0587 12.7949 17.0997 12.9034 17.1512 13.0395C17.1604 13.064 17.1701 13.0895 17.1793 13.1164C17.2061 13.194 17.2012 14.2025 17.1972 15.029C17.1948 15.5219 17.1928 15.9502 17.1979 16.0776C17.1738 16.092 17.1508 16.1056 17.1289 16.1186C16.7901 16.3195 16.6935 16.3768 16.4423 16.6542C15.8465 17.3122 15.8769 18.3552 15.9065 19.3733C15.9126 19.5837 15.9186 19.7929 15.9193 19.9975L15.9247 23.3334H12.2363L7 7.34247Z' fill='white'/%3e%3c/svg%3e";

    const baloonLayout = ymaps.templateLayoutFactory.createClass(balloonTemplate, {
      build() {
        this.constructor.superclass.build.call(this);

        this._balloon = mapNode.querySelector('.balloon');
        this._close = this._balloon.querySelector('.balloon__close');
        this._choiceBtn = this._balloon.querySelector('.balloon__btn');

        this._close?.addEventListener('click', this.onCloseClick.bind(this));
        this._choiceBtn?.addEventListener('click', this.onChoiceClick.bind(this));
      },

      onCloseClick() {
        this.events.fire('userclose');
      },

      onChoiceClick(e) {
        const { id } = e.target.closest('.balloon');

        mapNode.dispatchEvent(
          new CustomEvent('store-choice', {
            detail: { id },
          }),
        );
      },
    });

    const pointId = Number(new URLSearchParams(window.location.search).get('point'));
    let placemarkWithOpenBalloon = null;
    const placemarks = [];

    points.forEach((point) => {
      const placemark = new ymaps.Placemark(
        point.coord,
        { ...point.properties },
        {
          iconLayout: 'default#image',
          iconImageHref: convertedPlacemark,
          iconImageSize: [30, 36],
          balloonLayout: baloonLayout,
          balloonOffset: [-150, 0],
          hideIconOnBalloonOpen: false,
        },
      );

      pointCollection.add(placemark);

      if (point.properties.id === pointId) {
        placemarkWithOpenBalloon = placemark;
      }

      placemarks.push(placemark);

      placemark.events.add('click', (event) => {
        placemarks.forEach((pl) => {
          const target = event.get('target');

          if (pl !== target) {
            pl.options.set('iconImageHref', convertedPlacemark);
          } else {
            target.options.set('iconImageHref', convertedPlacemarkActive);
          }
        });
      });
    });

    // map.events.add('balloonopen', (e) => {
    //   e.get('target').options.set('iconImageHref', convertedPlacemarkActive);
    // });

    map.events.add('balloonclose', (e) => {
      e.get('target').options.set('iconImageHref', convertedPlacemark);
    });

    map.geoObjects.add(pointCollection);

    if (placemarkWithOpenBalloon) {
      document.querySelectorAll('.js-toggle-group-block__btn')[1]?.click();
      placemarkWithOpenBalloon.balloon.open();
      placemarkWithOpenBalloon.options.set('iconImageHref', convertedPlacemarkActive);
    }
  });
};

export default mapWithBalloon;
