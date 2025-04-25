import { H1, Stack, styled } from 'tamagui';

const ContentStack = styled(Stack, {
  gap: 16,
  padding: 16,
  width: '100%',
  maxWidth: 1000,
  alignSelf: 'center',
});

export default function ContentsPage() {  
  return (
    <ContentStack>
      <H1>홈</H1>
      
     
    </ContentStack>
  );
}