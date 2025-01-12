export type TEventsParams = {
  page: number;
  pageSize: number;
  status?: string | null;
  sport?: string | null;
  location?: string | null;
  participantsCount?: number | null;
  competitionType?: string | null;
  gender?: string | null;
  q?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  ordering?: string | null;
}