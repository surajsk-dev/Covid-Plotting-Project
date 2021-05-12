function updateMap() {
    fetch('https://corona-api.com/countries')
        .then(response => response.json())
        .then(resData => {
            console.log(resData.data);
            resData.data.forEach(element => {
                latitude = element.coordinates.latitude;
                longitude = element.coordinates.longitude;
                country=element.name;

                totalCases=element.latest_data.confirmed;
                if(totalCases<1000000){
                    color = '#ffcccb';
                }
                else if(totalCases>=1000000 && totalCases<=10000000){
                    color='#ff4040';
                }
                else{
                    color='#ff0000';
                }

                // mark on map
                var marker = new mapboxgl.Marker({
                        draggable: false,
                        color: color
                    })

                var minPopup = new mapboxgl.Popup()

                minPopup.setHTML(`Total Cases: ${totalCases} <br> ${country}`)
                marker.setPopup(minPopup)

                marker.setLngLat([longitude, latitude])
                marker.addTo(map);

                
                

                
            });
        })

}

updateMap();