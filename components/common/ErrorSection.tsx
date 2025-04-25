import { AlertTriangle, RefreshCw } from "@tamagui/lucide-icons";
import { Button, SizableText, Spinner, YStack, styled } from "tamagui";

interface ErrorSectionProps {
  isLoading?: boolean;
  retry?: () => void;
}

export default function ErrorSection({ retry, isLoading }: ErrorSectionProps) {
  return (
    <ErrorContainer>
      <AlertTriangle size={40} color='gray' />
      <ErrorMessage>불러오는 중 오류 발생</ErrorMessage>
      {retry && (
        <RetryButton
          size="$3"
          icon={!isLoading ? RefreshCw : Spinner}
          disabled={isLoading}
          onPress={retry}
        >
          다시 시도하기
        </RetryButton>
      )}
    </ErrorContainer>
  );
}

const ErrorContainer = styled(YStack, {
  alignSelf: "center",
  alignItems: "center",
  gap: 12,
});

const ErrorMessage = styled(SizableText, {
  color: "gray",
  fontWeight: "bold",
});

const RetryButton = styled(Button, {
  variants: {
    isLoading: {
      true: {
        opacity: 0.7,
      },
    },
  },
});