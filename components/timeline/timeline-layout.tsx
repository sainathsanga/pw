import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from './timeline';

export type TimelineItemType = {
  id: number;
  title: string;
  description?: string;
  time: string;
};

const timelineData: TimelineItemType[] = [
  {
    id: 1,
    title: 'Engagement',
    description:
      'Seven Hills Convention Hall, Secunderabad.',
    time: '02/11/2025',
  },
  {
    id: 2,
    title: 'Wedding',
    description:
      'Gayatri Convention Hall, Diamond Point, Secunderabad.',
    time: '11:11 23/11/2025',
  },
  {
    id: 3,
    title: 'Bharaath',
    description: 'Secunderabad -> Old Bowenpally.',
    time: '18:00 23/11/2025',
  },
    {
    id: 4,
    title: 'Reception',
    description: 'Mallareddy Gardens, Old Bowenpally, Secunderabad.',
    time: '19:00 26/11/2025',
  },

];

export const TimelineLayout = () => {
  return (
    <Timeline className='mt-8 flex-col items-center'>
      {timelineData.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineHeader>
            <TimelineTime>{item.time}</TimelineTime>
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
          {item.description && (
            <TimelineDescription>{item.description}</TimelineDescription>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};