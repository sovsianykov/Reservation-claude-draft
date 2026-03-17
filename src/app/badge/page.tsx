import Image from 'next/image';
import { Badge } from '@/shared/Badge/Badge';

export default function FigmaPreviewPage() {
    return (
        <main style={{ padding: '2rem', display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center', background: '#1a1a2e', minHeight: '100vh' }}>
            <Badge
                label="Add text here"
                variant="success"
                hasIcon
                icon={<Image src="/icons/dollar-bag.svg" alt="dollar bag" width={19} height={20} />}
            />

            <Badge
                label="Add text here"
                variant="warning"
                hasIcon
                icon={<Image src="/icons/secure-lock.svg" alt="secure lock" width={23} height={20} />}
            />

            <Badge
                label="Add text here"
                variant="info"
                hasIcon
                icon={<Image src="/icons/verified.svg" alt="verified" width={18} height={18} />}
            />
        </main>
    );
}
