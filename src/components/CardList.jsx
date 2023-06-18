import React from 'react'
import Card from "../components/Card"
import BookImage from '../assets/bairagi.webp'

const date = [
    {id:1, name: "თეთრი ბაირაღები", image:BookImage, description:"სტუდენტ ზაზა ნაკაშიძეს, ჩხუბში მონაწილეობისთვის დააპატიმრებენ, უდანაშაულობის დამტკიცების იმედი არ აქვს. ციხის საკანში სხვადასხვა ეროვნებისა და მრწამსის დამნაშავეები შეყრილან. დროს განვლილ ცხოვრებაზე და დანაშაულის ჩადენის მიზეზებზე კამათში კლავენ. ქურდის, მკვლელის, სახელმწიფო ქონების გამფლანგველის, ყველაზე საშიში ბოროტმოქმედის სულშიც კი შეიძლება სათუთი გრძნობები იმალებოდეს.", characters:['ზაზა','შოშია','ლიმონა','ტიგრანა']},
    
]


const CardList = () => {


function action(name, description, characters) {
    console.log(`this is ${name}, this is its description ${description} and this is its characters ${characters} `)
}

  return (
    <div>

    {date.map((card) => <Card key={card.id} name={card.name} image={card.image} description={card.description} characters={card.characters} action={action}/>)}

        
    </div>
  )
}

export default CardList
