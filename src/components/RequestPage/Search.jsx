import React, { useEffect, useState } from "react"
import rp from "request-promise"
import cheerio from "cheerio"

const Search = () => {

    // Title [done]
    // Description [done]
    // Author
    // Thumbnail
    // Price
    // Discount
    // Dicount Left

    // States
    const [search, setSearch] = useState("")
    const [isSpin, setSpin] = useState(false)
    const [getHtml, setHtml] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [author, setAuthor] = useState()
    const [thumbnail, setThumbnail] = useState()
    const [price, setPrice] = useState()
    const [discount, setDiscount] = useState()
    const [discountLeft, setDiscountLeft] = useState()
    const [discountLeftHour, setDiscountLeftHour] = useState()


    function createMarkup() {
        return { __html: getHtml };
    }
    const fetchData = () => {
        setSpin(true)
        rp("https://cors-anywhere.herokuapp.com/" + search)
            .then(html => {
                setHtml(html)
                console.log(search.split('/'))
                if ((search.split('/')[2] === "www.udemy.com") && (search.split('/')[3] === "course")) {
                    console.log("Got it")
                    //udlite-heading-xl clp-lead__title clp-lead__title--small
                    const u_title = document.querySelector(".udlite-heading-xl.clp-lead__title.clp-lead__title--small").innerHTML
                    setTitle(u_title)
                    //show-more--content--isg5c show-more--with-gradient--2abmN
                    if (document.querySelectorAll(".show-more--content--isg5c.show-more--with-gradient--2abmN")[1].children[0].children[0]) {
                        const u_descriptionWithDiscount = document.querySelectorAll(".show-more--content--isg5c.show-more--with-gradient--2abmN")[1].children[0].children[0].innerHTML
                        setDescription(u_descriptionWithDiscount)
                    }
                    else {
                        const u_descriptionWithOutDiscount = document.querySelectorAll(".show-more--content--isg5c.show-more--with-gradient--2abmN")[0].children[0].children[0].innerHTML
                        setDescription(u_descriptionWithOutDiscount)
                    }

                    const u_author = document.querySelector(".udlite-btn.udlite-btn-large.udlite-btn-link.udlite-heading-md.udlite-text-sm.udlite-instructor-links").innerHTML
                    setAuthor(u_author)

                    //intro-asset--img-aspect--1UbeZ
                    const u_image = document.querySelector(".intro-asset--img-aspect--1UbeZ img").getAttribute("src")
                    setThumbnail(u_image)
                    console.log(document.querySelectorAll("span.udlite-sr-only")[3].nextElementSibling.innerHTML)


                    // udlite-sr-only
                    const u_price = document.querySelectorAll("span.udlite-sr-only")[1].nextElementSibling.children[0].innerHTML
                    setPrice(u_price)

                    const u_discount = document.querySelectorAll("span.udlite-sr-only")[2].nextElementSibling.children[0].children[0].innerHTML
                    setDiscount(u_discount)

                    const u_dicountLeft = document.querySelectorAll("span.udlite-sr-only")[3].nextElementSibling.innerHTML
                    setDiscountLeft(u_dicountLeft)

                    const u_dicountLeftHour = document.querySelectorAll("span.udlite-text-sm")[2].innerHTML
                    setDiscountLeftHour(u_dicountLeftHour)


                    setSpin(false)
                }
                else if ((search.split('/')[0] === "www.udemy.com") && (search.split('/')[1] === "course")) {
                    console.log("Got it")
                    setSpin(false)
                }
                else if ((search.split('/')[0] === "www.udemy.com") && (search.split('/')[1] === "course")) {
                    console.log("Got it")
                    setSpin(false)
                }
                else console.log("wrong")

            })
            .catch(err => console.log(err))
    }
    return <>
        <div className="search">
            <p>Please insert a valid udemy URL</p>
            <form className="input-group mb-3" onSubmit={e => {
                e.preventDefault()
                fetchData()
            }}>
                <input className="form-control" placeholder="Paste a link" type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)} />
                <div className="input-group-append">
                    <button className="btn input-group-text px-4" type="submit">
                        {isSpin ? <span className="spinner-border spinner-border-sm mr-3" role="status" aria-hidden="true"></span> : null}
                Search
                </button>
                </div>
            </form>
        </div>
        <div dangerouslySetInnerHTML={createMarkup()} />
    </>

}



export default Search