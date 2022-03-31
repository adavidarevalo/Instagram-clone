import { Link } from 'react-router-dom';
import Profile from './profile';

export default function AsideSuggestions() {
    return (
        <>
            <Profile imageSize={14} />
            <div className="mb-3 flex justify-between">
                <h2 className="text-xs text-gray-500 font-bold">Sugerencias para ti</h2>
                <Link to="/" className="text-xs font-medium">
                    Ver Todo
                </Link>
            </div>
            <Profile imageSize={10} />
            <Profile imageSize={10} />
            <Profile imageSize={10} />
            <Profile imageSize={10} />
        </>
    );
}
