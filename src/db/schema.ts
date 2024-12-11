import { sql } from 'drizzle-orm';
import { text, sqliteTable, int, index, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const bookingTable = sqliteTable(
  'booking_table',
  {
    id: int('id').primaryKey({ autoIncrement: true }),
    bookingId: text('booking_id').notNull(),
    guestName: text('guest_name').notNull(),
    guestEmail: text('guest_email').notNull(),
    guestTel: text('guest_tel').notNull(),
    checkInDate: text('checkin_date').notNull(),
    checkOutDate: text('checkout_date').notNull(),
    totalPrice: int('total_price').notNull(),
    bookingStatus: text('booking_status', { enum: ['paid', 'unpaid'] })
      .notNull()
      .default('unpaid'),

    createdAt: text('created_at')
      .notNull()
      .default(sql`(current_date)`),
    updatedAt: int('updated_at', { mode: 'timestamp' })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (table) => {
    return {
      checkInDateIdx: index('checkin_date_idx').on(table.checkInDate),
      bookingStatus: uniqueIndex('booking_status_idx').on(table.bookingStatus),
    };
  }
);
