import { ScreenSize, useScreenSize } from '@/hooks/useScreenSize';
import { H1, H3, H5, Stack, styled, Text } from 'tamagui';

interface ContentContainerProps {
  title?: string;
  description?: string;
  tools?: React.ReactNode;
  children: React.ReactNode;
}

export default function ContentContainer({ title, description, tools, children }: ContentContainerProps) {
  const screenSize = useScreenSize();
  const isHeaderShown = screenSize !== ScreenSize.MOBILE;

  return (
    <ContentStack marginTop={isHeaderShown ? 30 : 0}>
      {isHeaderShown && (title || description) && (
        <HeaderStack>
          <H5 color="$color">{title}</H5>
          {description && <Text color="$color">{description}</Text>}
          {tools && tools}
        </HeaderStack>
      )}
      {children}
    </ContentStack>
  );
}

const ContentStack = styled(Stack, {
  gap: 16,
  padding: 16,
  width: '100%',
  maxWidth: 1000,
  alignSelf: 'center',
});

const HeaderStack = styled(Stack, {
  gap: 8,
  width: '100%',
  alignSelf: 'flex-start',
});
