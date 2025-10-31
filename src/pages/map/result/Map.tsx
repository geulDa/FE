import { Header } from '@/shared/components';
import { useRouter } from 'next/router';
import FullMap from '@/pages/map/result/components/FullMap';

const MapPage = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[100vh] bg-mint-300 overflow-hidden">
      <Header
        title="코스 추천"
        onClick={() => router.push('/map/result?from=map')}
      />
      <FullMap />
    </div>
  );
};

export default MapPage;
