import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
getFoodById(id:number):Foods{
  return this.getAll().find(food=>food.id==id)!;

}
  getAllFoodByTag(tag:string) :Foods[]{
    return tag =="All"?
    this.getAll(): this.getAll().filter(food=>food.tags?.
      includes(tag));

  }

  getAllTag():Tag[]{
return [
{name:'All',count:8},
{name:'chocolatedish',count:1},
{name:'peanutrich',count:1},
{name:'Sweetdish',count:3},
{name:'Butterrich',count:1},
{name:'vanillarich',count:2},
];
  }
  getAll():Foods[]{
    return[
{
  id:1,
   name:'CHOCOLATE CAKE',
   price:1000,
   cookTime:'30',
   favorite:true,
   origins:['germany','usa'],
   star:3.5,
   imageUrl:'https://i.postimg.cc/FK9SGGJk/Chocolate-1744x1417-jpg.webp',
   tags:['chocolatedish','cake'],
   total:0,
   quantity:0,
   totalprice:0


},
{
  id:2,
   name:'PEANUT CAKE',
   price:2000,
   cookTime:'30',
   favorite:false,
   origins:['germany','usa'],
   star:3.5,
   imageUrl:'https://i.postimg.cc/7PTN5s1q/Fig-and-Honey-1748x1473-jpg.webp',
   tags:['peanutrich','cake'],
   total:0,
   quantity:0,
   totalprice:0




},
{
  id:3,
   name:'MANGO CAKE',
   price:900,
   cookTime:'30',
   favorite:true,
   origins:['germany','usa'],
   star:3.5,
   imageUrl:'https://i.postimg.cc/Y90GHYh0/Mango-1796x1587-jpg.webp',
   tags:['Sweetdish','cake'],
   total:0,
   quantity:0,
   totalprice:0




},
{
  id:4,
   name:'BLUE BERRY CAKE',
   price:2000,
   cookTime:'30',
   favorite:false,
   origins:['germany','usa'],
   star:3.5,
   imageUrl:'https://i.postimg.cc/8P1Mf23Q/Blue-Berry-600x600w-jpg.webp',
   tags:['Sweetdish','cake'],
   total:0,
   quantity:0,
   totalprice:0




},

{
  id:5,
   name:'BUTTERSCOTH CAKE',
   price:2000,
   cookTime:'30',
   favorite:true,
   origins:['germany','usa'],
   star:3.5,
   imageUrl:'https://i.postimg.cc/FznkKQPj/Praline-Butterscotch-1782x1621-jpg.webp',
   tags:['Sweetdish','cake'],
   total:0,
   quantity:0,
   totalprice:0




},
{
  id:6,
   name:'CARAMEL CAKE',
   price:2000,
   cookTime:'1hr',
   favorite:true,
   origins:['canada','usa'],
   star:3.5,
   imageUrl:'https://i.postimg.cc/t4nvpqrN/Milk-Chocolate-300x300w-jpg.webp',
   tags:['Butterrich','cake'],
   total:0,
   quantity:0,
   totalprice:0




},
{
  id:7,
   name:'VANCHO CAKE',
   price:2000,
   cookTime:'10-15',
   favorite:true,
   origins:['banglore','usa'],
   star:3.5,
   imageUrl:'https://i.postimg.cc/6qHnGZQ4/Vanchoo-1802x1487-jpg.webp',
   tags:['vanillarich','cake'],
   total:0,
   quantity:0,
   totalprice:0


},
{
  id:8,
   name:'VANILLA CAKE',
   price:2000,
   cookTime:'20',
   favorite:false,
   origins:['indian','usa'],
   star:3.5,
   imageUrl:'https://i.postimg.cc/Bv1rYc9s/Peanut-Butterr-1783x1558-jpg.webp',
   tags:['vanillarich','cake'],
   total:0,
   quantity:0,
   totalprice:0



}




      ]
  }


}
