import { useQuery } from '@apollo/client';
import { useLocalSearchParams } from 'expo-router';
import ContentContainer from '@/components/common/ContentContainer';
import { GET_GAME } from '@/lib/queries';
import { Text, XStack, YStack, Spinner, Card, SizableText, Button, styled, Avatar } from 'tamagui';
import { Image } from 'react-native';
import ErrorSection from '@/components/common/ErrorSection';
import { Timer } from '@tamagui/lucide-icons';
import { useMemo } from 'react';
import { GameData } from '@/lib/types';

export default function ContentDetailPage() {
  const { contentId } = useLocalSearchParams();
  const { loading, error, data, refetch } = useQuery<GameData>(GET_GAME, {
    variables: { id: contentId },
  });

  const formattedPlayTime = useMemo(() => {
    if (!data?.game?.playDuration) return 0;
    return Math.round(data.game.playDuration / 60);
  }, [data?.game?.playDuration]);

  return (
    <ContentContainer>
      <YStack alignItems="center" justifyContent="center" flex={1} gap={12}>
        {loading && <Spinner size="large" />}
        {error && <ErrorSection isLoading={loading} retry={() => { refetch(); }} />}
        {data && data.game && (
          <YStack width="100%" gap={16}>
            <Card width="100%" overflow="hidden">
              <Card.Background>
                <Image
                  source={{ uri: data.game.coverUrl }}
                  style={{ width: '100%', height: 200 }}
                  resizeMode="cover"
                />
              </Card.Background>
            </Card>

            <YStack gap={20}>
              <XStack gap={16} alignItems="center">
                <GameAvatar>
                  <Avatar.Image src={data.game.iconUrl} />
                </GameAvatar>
                <YStack flex={1}>
                  <GameTitle>{data.game.name}</GameTitle>
                  <PlayTimeContainer>
                    <Timer size={16} color="gray" />
                    <PlayTimeText>
                      플레이 시간 {formattedPlayTime}분
                    </PlayTimeText>
                  </PlayTimeContainer>
                </YStack>
              </XStack>

              <YStack gap={8}>
                <SectionTitle>설명</SectionTitle>
                <SizableText size="$3">{data.game.description}</SizableText>
              </YStack>

              <YStack gap={8}>
                <SectionTitle>관련 스킬</SectionTitle>
                <SkillCard>
                  <SkillTitle>{data.game.relatedSkill.name}</SkillTitle>
                  <SkillDescription>{data.game.relatedSkill.description}</SkillDescription>
                </SkillCard>
              </YStack>

              <YStack gap={8}>
                <SectionTitle>상태</SectionTitle>
                <StatusText>{data.game.status}</StatusText>
              </YStack>

              <YStack gap={8}>
                <SectionTitle>난이도</SectionTitle>
                <StatusText>{data.game.intensity}</StatusText>
              </YStack>

              <YStack gap={8}>
                <SectionTitle>티어</SectionTitle>
                <StatusText>{data.game.paywall}</StatusText>
              </YStack>

            </YStack>
          </YStack>
        )}
      </YStack>
    </ContentContainer>
  );
}

const GameAvatar = styled(Avatar, {
  width: 60,
  height: 60,
  borderRadius: 10
});

const GameTitle = styled(SizableText, {
  size: "$5",
  fontWeight: "bold"
});

const PlayTimeContainer = styled(XStack, {
  alignItems: "center",
  gap: 4
});

const PlayTimeText = styled(SizableText, {
  size: "$3",
  color: "gray"
});

const SectionTitle = styled(SizableText, {
  size: "$4",
  fontWeight: "bold"
});

const SkillCard = styled(Card, {
  padding: 12,
  bordered: true
});

const SkillTitle = styled(SizableText, {
  size: "$4",
  fontWeight: "bold"
});

const SkillDescription = styled(SizableText, {
  size: "$3",
  marginTop: 4
});

const StatusText = styled(SizableText, {
  size: "$3"
});