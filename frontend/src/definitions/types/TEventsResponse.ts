import {EEventStatus} from "@/definitions/enums/EEventStatus.ts";

export type TEvent = {
  id: number;
  name: string;
  participants: string;
  gender: string;
  competition_type: string;
  start_date: string;
  end_date: string;
  location: string;
  participants_count: number;
  sport: string;
  min_age: number;
  max_age: number;
  status: EEventStatus;
}

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export type TEventsResponse = PaginatedResponse<TEvent>;