import { Timer } from "@tamagui/lucide-icons";
import { Avatar, Card, XStack, YStack, Button, SizableText, styled } from "tamagui";
import { useMemo } from "react";
import { useRouter } from "expo-router";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  playTime: number;
}

export default function GameCard({
  id,
  title,
  description,
  imageUrl,
  playTime
}: GameCardProps) {
  const router = useRouter();

  const formattedPlayTime = useMemo(() => {
    return Math.round(playTime / 60);
  }, [playTime]);

  return (
    <StyledCard>
      <Card.Header padded>
        <CardContainer>
          <GameInfoContainer>
            <GameAvatar>
              <Avatar.Image src={imageUrl} />
            </GameAvatar>
            <GameDetails>
              <GameTitle>{title}</GameTitle>
              <GameDescription>{description}</GameDescription>
              <PlayTimeContainer>
                <Timer size={16} color='grey' />
                <PlayTimeText>
                  플레이 시간 {formattedPlayTime}분
                </PlayTimeText>
              </PlayTimeContainer>
            </GameDetails>
          </GameInfoContainer>
          <ManageButton onPress={() => router.navigate(`/contents/${id}`)}>
            <Button.Text>
              <ButtonText>
                관리하기
              </ButtonText>
            </Button.Text>
          </ManageButton>
        </CardContainer>
      </Card.Header>
    </StyledCard>
  );
}

const StyledCard = styled(Card, {
  width: "100%",
  borderRadius: 10,
  bordered: true
});

const CardContainer = styled(XStack, {
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
});

const GameInfoContainer = styled(XStack, {
  alignItems: "center",
  gap: 16,
  flex: 1
});

const GameAvatar = styled(Avatar, {
  size: 60,
  borderRadius: 10
});

const GameDetails = styled(YStack, {
  flex: 1
});

const GameTitle = styled(SizableText, {
  size: "$4"
});

const GameDescription = styled(SizableText, {
  size: "$3",
  numberOfLines: 2,
  ellipsizeMode: "tail"
});

const PlayTimeContainer = styled(XStack, {
  alignItems: "center",
  gap: 4
});

const PlayTimeText = styled(SizableText, {
  size: "$3",
  color: "grey"
});

const ManageButton = styled(Button, {
  bordered: true,
  borderRadius: 50,
  marginLeft: 8
});

const ButtonText = styled(SizableText, {
  size: "$3"
});