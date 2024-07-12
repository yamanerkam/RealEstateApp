import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './Map.css'
import Pin from '../Pin/Pin';
export default function Map({ items }) {
    console.log(items[0])
    return (
        <MapContainer className='map' center={[items[0].latitude, items[0].longitude]} zoom={7} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items && (items.map(item => (
                <Pin item={item} key={item.id} />
            )))}
        </MapContainer>

    )
}
