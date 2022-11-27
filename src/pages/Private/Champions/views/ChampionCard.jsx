export default function ChampionCard({ champion, imageSize }) {
    const size = imageSize || 100;
    // brand: '5';
    // championship: 'WWE Submmission Championship';
    // championshipId: '18';
    // championshipImage: 'https://cdn.shopify.com/s/files/1/0100/2206/0079/products/Big-Green-WWF-Championship-Belt-Autographed-Hulk-Hogan_1_1024x1024.jpg?v=1574924720';
    // overall: '92';
    // reignDays: '146';
    // reignId: '14';
    // totalDays: '146';
    // totalReigns: '1';
    // wrestlerId: '111';
    // wrestlerImage: 'http://vps-f87b433e.vps.ovh.net/2k/images/97a7876d5748c3139989dc4f7d591eb9.webp';
    // wrestlerName: 'Ric Flair';

    return (
        <div className="champion-card">
            <div className="champion-card__image" style={{ backgroundImage: `url(${champion.championshipImage})` }}>
                <img className="image" width={imageSize} height={imageSize} src={champion.wrestlerImage} alt="" />
                <h4 className="championship_name">{champion.championship}</h4>
            </div>
            <h3 className="wrestler_name">{champion.wrestlerName}</h3>
            <div className="flex space">
                <span>Reinados totales: </span>
                <span>{champion.totalReigns}</span>
            </div>
            <div className="flex space">
                <span>Dias totales: </span>
                <span>{champion.totalDays}</span>
            </div>
        </div>
    );
}
