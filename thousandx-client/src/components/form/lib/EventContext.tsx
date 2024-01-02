'use client';
import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import events from 'events';

export type EventContextData = {
  event: events.EventEmitter;
};

export const EventContext = React.createContext<EventContextData>({} as any);

export const EventContextProvider: FC<PropsWithChildren> = props => {
  const [event, setEvent] = useState<events.EventEmitter>(
    new events.EventEmitter(),
  );
  useEffect(() => {
    setEvent(new events.EventEmitter());
  }, []);
  return (
    <EventContext.Provider value={{event: event}}>
      {props.children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext).event;

export const useEventListener = (
  name: string,
  handler: (data: any) => void,
) => {
  const evts = useEvents();
  useEffect(() => {
    evts.on(name, handler);
    return () => {
      evts.off(name, handler);
    };
  }, [evts, handler, name]);
};
