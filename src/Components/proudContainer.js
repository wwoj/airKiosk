import React, { Component } from 'react';
import ProudOfPolandItem from "../Components/proudOfPoland";
import ProudOfPolandMain from "../Components/proudOfPolanMain";
export default class ProudMain extends Component{
    render(){
        return(
            <div className="proud-of-poland-container special-offerts">
          <ProudOfPolandItem
            img="https://i2.skapiec.pl/1/Vu8ktkpTURBXy83NmJmNTBkYzExZmNhYmMyMWMxYjE5YmUxYTk2NjM5OC5qcGeTlQLNArwAwsOVAgDNArzCw5MJpjdiMTJkMQY/dawanda-pl-folk-budzik-bialy-w-lowickie-wzory-ludowe-75751743.jpg"
            alt="First Picture"
            text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
            price="123"
          />
          <ProudOfPolandItem
            img="https://i.pinimg.com/originals/07/e5/ba/07e5ba783b57f50c65feb9acb4a05a78.jpg"
            alt="First Picture"
            text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
            price="123"
          />
          <ProudOfPolandItem
            img="https://folkstar.pl/media/cache/sylius_shop_product_original/folkowe-gadzety-smycz-do-kluczy-lowickie-wzory-ludowe-wycinanka-5450-1.jpg"
            alt="First Picture"
            text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
            price="123"
          />
          <ProudOfPolandMain
            img="https://cosestetycznego.files.wordpress.com/2012/11/c582owicz.jpg"
            alt="First Picture"
            text="BUDZIK ŁOWICKI W KOLORZE BIAŁYM"
            price="123"
          />
        </div>
        )
    }
}