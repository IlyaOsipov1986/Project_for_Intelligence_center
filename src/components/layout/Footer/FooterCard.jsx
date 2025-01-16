const FooterCard = ({...item}) => {

    return (
        <div className="footer-nav-item">
            <img src={item.icon} alt="иконка"/>
            <span>{item.title}</span>
            <p>{item.text}</p>
            {item.link && (
                <a href="">{item.link}</a>
            )}
            {item.addText && (
                <p>{item.addText}</p>
            )}
        </div>
    )
}
export default FooterCard;