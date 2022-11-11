import Laptop from "./models/laptop";
import Mobile from "./models/mobile";
import Bags from "./models/bags"
import Headphone from "./models/headphones"
import Shoes from "./models/shoes"
import Watch from "./models/watches"
import Clothe from "./models/clothes"
import Categore from "./models/categore";
async function LaptopAdder(data) {
    const product = new Laptop({
        Background: data.Background,
        desc: data.desc,
        option: data.option,
        title: data.title,
        id: data.id,
        price: data.price,
        body: data.body,
        stock: data.stock
    })
    try {
        const result = await product.save()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
async function mobileAdder(data) {
    const product = new Mobile({
        Background: data.Background,
        desc: data.desc,
        option: data.option,
        title: data.title,
        id: data.id,
        price: data.price,
        body: data.body,
        stock: data.stock
    })
    try {
        const result = await product.save()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
async function bagAdder(data) {
    const product = new Bags({
        Background: data.Background,
        desc: data.desc,
        option: data.option,
        title: data.title,
        id: data.id,
        price: data.price,
        body: data.body,
        stock: data.stock
    })
    try {
        const result = await product.save()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
async function shoesAdder(data) {
    const product = new Shoes({
        Background: data.Background,
        desc: data.desc,
        option: data.option,
        title: data.title,
        id: data.id,
        price: data.price,
        body: data.body,
        stock: data.stock
    })
    try {
        const result = await product.save()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

async function headphonesAdder(data) {
    const product = new Headphone({
        Background: data.Background,
        desc: data.desc,
        option: data.option,
        title: data.title,
        id: data.id,
        price: data.price,
        body: data.body,
        stock: data.stock
    })
    try {
        const result = await product.save()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
async function watchAdder(data) {
    const product = new Watch({
        Background: data.Background,
        desc: data.desc,
        option: data.option,
        title: data.title,
        id: data.id,
        price: data.price,
        body: data.body,
        stock: data.stock
    })
    try {
        const result = await product.save()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
async function clothAdder(data) {
    const product = new Clothe({
        Background: data.Background,
        desc: data.desc,
        option: data.option,
        title: data.title,
        id: data.id,
        price: data.price,
        body: data.body,
        stock: data.stock
    })
    try {
        const result = await product.save()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
export const categoreAdder = async (data) => {
    const cat = new Categore({
        id: data.id,
        name: data.name,
        Background: data.Background,
        link: data.link
    })
    return await cat.save()
}
// const adder1 = async () => {
//     categoreAdder({
//         id: "1",
//         name: "Laptops",
//         Background: "/pc.jpg",
//         link: "laptop"
//     })
//     categoreAdder({
//         id: "2",
//         name: "Mobile Phones",
//         Background: "/mobile.jpg",
//         link: "mobiles"
//     })
//     categoreAdder({
//         id: "3",
//         name: "Shoes",
//         Background: "/she14.jpg",
//         link: "shoes"
//     })
//     categoreAdder({
//         id: "4",
//         name: "Watches",
//         Background: "/watch.jpg",
//         link: "watches"
//     })
//     categoreAdder({
//         id: "5",
//         name: "Bags",
//         Background: "/bag.jpg",
//         link: "bags"
//     })
//     categoreAdder({
//         id: "6",
//         name: "Clothes",
//         Background: "/c13.jpg",
//         link: "clothes"
//     })
//     categoreAdder({
//         id: "7",
//         name: "Headphones",
//         Background: "/h8.jpg",
//         link: "headphones"
//     })
// }
async function adder() {
    mobileAdder({
        Background: "/mob4.jpg",
        desc: ["/mob5.jpg", "/mob8.jpg", "/mob6.jpg"],
        option: "/",
        title: "Iphone",
        id: "4",
        price: 299,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    mobileAdder({
        Background: "/mob5.jpg",
        desc: ["/mob11.jpg", "/mob9.jpg", "/mob4.jpg"],
        option: "/",
        title: "Imac",
        id: "5",
        price: 599,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    mobileAdder({
        Background: "/mob6.jpg",
        desc: ["/mob5.jpg", "/mob8.jpg", "/mob6.jpg"],
        option: "/",
        title: "Dell",
        id: "6",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    mobileAdder({
        Background: "/mob7.jpg",
        desc: ["/mob5.jpg", "/mob8.jpg", "/mob6.jpg"],
        option: "/",
        title: "Dell",
        id: "7",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    bagAdder({
        Background: "/b1.jpg",
        desc: ["/b3.jpg", "/b5.jpg", "/b6.jpg"],
        option: "/",
        title: "Red bag",
        id: "1",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    bagAdder({
        Background: "/b2.jpg",
        desc: ["/b3.jpg", "/b5.jpg", "/b6.jpg"],
        option: "/",
        title: "Pink leather",
        id: "2",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    bagAdder({
        Background: "/b3.jpg",
        desc: ["/b3.jpg", "/b7.jpg", "/b8.jpg"],
        option: "/",
        title: "Golden",
        id: "3",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    bagAdder({
        Background: "/b4.jpg",
        desc: ["/b3.jpg", "/b5.jpg", "/b6.jpg"],
        option: "/",
        title: "Fashion Bag",
        id: "4",
        price: 299,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    bagAdder({
        Background: "/mob6.jpg",
        desc: ["/mob5.jpg", "/mob8.jpg", "/mob6.jpg"],
        option: "/",
        title: "Dell",
        id: "6",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    headphonesAdder({
        Background: "/a5.webp",
        desc: ["/h5.jpg", "/h8.jpg", "/h6.jpg"],
        option: "/",
        title: "Red devils",
        id: "1",
        price: 99,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    headphonesAdder({
        Background: "/h6.jpg",
        desc: ["/h5.jpg", "/h8.jpg", "/h6.jpg"],
        option: "/",
        title: "Hoddies match",
        id: "2",
        price: 49,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    headphonesAdder({
        Background: "/h6.jpg",
        desc: ["/h5.jpg", "/h8.jpg", "/h6.jpg"],
        option: "/",
        title: "Off road",
        id: "3",
        price: 199,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    headphonesAdder({
        Background: "/h9.jpg",
        desc: ["/h5.jpg", "/h8.jpg", "/h6.jpg"],
        option: "/",
        title: "Air pods",
        id: "4",
        price: 199,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    headphonesAdder({
        Background: "/a6.webp",
        desc: ["/h5.jpg", "/h8.jpg", "/h6.jpg"],
        option: "/",
        title: "Fashion Black",
        id: "5",
        price: 299,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    clothAdder({
        Background: "/c1.jpg",
        desc: ["/c5.jpg", "/c8.jpg", "/c6.jpg"],
        option: "/",
        title: "underwear",
        id: "1",
        price: 99,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    clothAdder({
        Background: "/c2.jpg",
        desc: ["/c7.jpg", "/c9.jpg", "/c10.jpg"],
        option: "/",
        title: "T-shirt",
        id: "2",
        price: 199,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    clothAdder({
        Background: "/c3.jpg",
        desc: ["/c12.jpg", "/c1.jpg", "/c5.jpg"],
        option: "/",
        title: "T-shirt",
        id: "3",
        price: 89,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    clothAdder({
        Background: "/c4.jpg",
        desc: ["/c5.jpg", "/c8.jpg", "/c9.jpg"],
        option: "/",
        title: "Full Pack",
        id: "4",
        price: 69,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    clothAdder({
        Background: "/c6.jpg",
        desc: ["/c12.jpg", "/c1.jpg", "/c3.jpg"],
        option: "/",
        title: "Fashion",
        id: "5",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    shoesAdder({
        Background: "/she1.jpg",
        desc: ["/she15.jpg", "/she8.jpg", "/she6.jpg"],
        option: "/",
        title: "Nick",
        id: "1",
        price: 199,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    shoesAdder({
        Background: "/she.jpg",
        desc: ["/she5.jpg", "/she8.jpg", "/she11.jpg"],
        option: "/",
        title: "Puma",
        id: "2",
        price: 199,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    shoesAdder({
        Background: "/she2.jpg",
        desc: ["/she10.jpg", "/she9.jpg", "/she12.jpg"],
        option: "/",
        title: "Jordan",
        id: "3",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    shoesAdder({
        Background: "/she4.jpg",
        desc: ["/she5.jpg", "/she8.jpg", "/she6.jpg"],
        option: "/",
        title: "Flex",
        id: "4",
        price: 299,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    shoesAdder({
        Background: "/she6.jpg",
        desc: ["/she5.jpg", "/she8.jpg", "/she6.jpg"],
        option: "/",
        title: "Dell",
        id: "5",
        price: 99,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    watchAdder({
        Background: "/w1.jpg",
        desc: ["/w5.jpg", "/w6.jpg", "/w7.jpg"],
        option: "/",
        title: "Apple watches",
        id: "1",
        price: 99,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    watchAdder({
        Background: "/w2.jpg",
        desc: ["/w5.jpg", "/w6.jpg", "/w7.jpg"],
        option: "/",
        title: "Fashion Watch",
        id: "2",
        price: 199,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    watchAdder({
        Background: "/w3.jpg",
        desc: ["/w5.jpg", "/w6.jpg", "/w7.jpg"],
        option: "/",
        title: "Blue Angel",
        id: "3",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    watchAdder({
        Background: "/w4.jpg",
        desc: ["/w5.jpg", "/w6.jpg", "/w7.jpg"],
        option: "/",
        title: "Red Devils",
        id: "4",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    LaptopAdder({
        Background: "/pc.jpg",
        desc: ["/pc5.jpg", "/pc6.jpg", "/pc7.jpg"],
        option: "/",
        title: "Hp Pavilon",
        id: "1",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    LaptopAdder({
        Background: "/pc1.jpg",
        desc: ["/pc5.jpg", "/pc6.jpg", "/pc7.jpg"],
        option: "/",
        title: "Hp Gaming",
        id: "2",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
    LaptopAdder({
        Background: "/pc2.jpg",
        desc: ["/pc5.jpg", "/pc6.jpg", "/pc7.jpg"],
        option: "/",
        title: "Dell",
        id: "2",
        price: 499,
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
        stock: 15
    })
}

export default adder;