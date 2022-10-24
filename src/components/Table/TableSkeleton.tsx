import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const imageSize = 55;
const waveSizes = 40;

export function TableSkeleton() {
    return (
        <Stack spacing={5} style={{ width: '100%' }}>
            <Skeleton animation="wave" />
            <div className="flex space w-100">
                <Skeleton variant="circular" width={imageSize} height={imageSize} animation="wave" />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
            </div>
            <div className="flex space w-100">
                <Skeleton variant="circular" width={imageSize} height={imageSize} animation="wave" />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
            </div>
            <div className="flex space w-100">
                <Skeleton variant="circular" width={imageSize} height={imageSize} animation="wave" />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
            </div>
            <div className="flex space w-100">
                <Skeleton variant="circular" width={imageSize} height={imageSize} animation="wave" />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
            </div>
            <div className="flex space w-100">
                <Skeleton variant="circular" width={imageSize} height={imageSize} animation="wave" />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
            </div>
            <div className="flex space w-100">
                <Skeleton variant="circular" width={imageSize} height={imageSize} animation="wave" />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
            </div>
            <div className="flex space w-100">
                <Skeleton variant="circular" width={imageSize} height={imageSize} animation="wave" />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
                <Skeleton animation="wave" width={waveSizes} />
            </div>
        </Stack>
    );
}
