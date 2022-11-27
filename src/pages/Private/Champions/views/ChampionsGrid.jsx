import ChampionCard from './ChampionCard';
import './grid.style.css';

export default function ChampionsGrid({ champions }) {
    const imageSize = 20;

    return (
        <div className="grid champions">
            {champions.map((row, ind) => (
                <ChampionCard key={ind} champion={row} imageSize={imageSize} />
            ))}
        </div>
    );
}
