import { YMaps, Map,Placemark,YMap } from '@pbe/react-yandex-maps';


export default function YandexMap({lat,lon}) {
    return (
        <YMaps>
            <div>
              
                <Map
                    defaultState={{ center: [lat, lon], zoom: 13, controls: [], }}
                    mode="vector"
                    width={'100%'}
                    height={300}
                >
                    <Placemark geometry={[lat, lon]} 
                    defaultProperties={{}}
                    defaultOptions={{
                        balloonCloseButton:true,
                        openBalloonOnClick:true,
                        balloonContent:"123",
                        iconContent: 'Мурманск',
                    }}/>
                </Map>
            </div>
        </YMaps>
    )
}
