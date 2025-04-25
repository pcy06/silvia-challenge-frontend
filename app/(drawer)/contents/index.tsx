import { useQuery } from '@apollo/client';
import ContentContainer from '@/components/common/ContentContainer';
import GameCard from '@/components/contents/GameCard';
import { GET_GAMES } from '@/lib/queries';
import { Text, XStack, YStack, Spinner } from 'tamagui';
import ErrorSection from '@/components/common/ErrorSection';
import { GamesData } from '@/lib/types';

export default function ContentsPage() {
  const { loading, error, data, refetch } = useQuery<GamesData>(GET_GAMES);

  return (
    <ContentContainer
      title="콘텐츠 관리"
      description="앱에서 사용자에게 제공되는 콘텐츠를 관리합니다."
    >
      <YStack alignItems="center" justifyContent="center" flex={1} gap={12}>
        {loading && <Spinner size="large" />}
        {error && <ErrorSection isLoading={loading} retry={() => { refetch(); }} />}
        {data && data?.games.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.name}
            description={game.description}
            imageUrl={game.iconUrl}
            playTime={game.playDuration}
          />
        ))}
      </YStack>
    </ContentContainer>
  );
}