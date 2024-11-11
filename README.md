# application chat real-time

Ứng dụng chat online này cung cấp một nền tảng giao tiếp trực tuyến thân thiện và dễ sử dụng, cho phép người dùng gửi và nhận tin nhắn theo thời gian thực

- Giao Diện UI
  Trang Đăng Nhập / Đăng Ký:
  Giao diện đăng nhập và đăng ký cho phép người dùng tạo tài khoản hoặc đăng nhập để truy cập hệ thống. Dữ liệu người dùng được bảo mật thông qua mã hóa và xác thực bằng token.
  Trang Chủ:
  Sidebar: Hiển thị danh sách tên của các người dùng có sẵn để trò chuyện ( Hiển thị trạng thái trực tuyến: Online / Offline ). Sidebar có thanh tìm kiếm ở phía trên, cho phép người dùng dễ dàng tìm kiếm và chọn người muốn trò chuyện. Dưới cùng có nút Logout giúp người dùng đăng xuất tài khoản.
  Message: Hiển thị cuộc trò chuyện giữa hai người dùng, hỗ trợ cuộn lại để xem lịch sử trò chuyện. Phía dưới có thanh nhập (input) để người dùng có thể gửi tin nhắn.

- Tính Năng
  Gửi và nhận tin nhắn theo thời gian thực:
  Cho phép người dùng gửi tin nhắn và nhận tin nhắn giữa các tài khoản. Nhờ Socket.io, tin nhắn hiển thị ngay khi có thay đổi.
  Xác thực và Ủy quyền với JSON Web Token:
  Bảo vệ dữ liệu người dùng bằng xác thực JWT, giúp đảm bảo rằng chỉ người dùng đã đăng nhập mới có thể truy cập và gửi/nhận tin nhắn.
  Trạng thái online/offline:
  Cập nhật trạng thái hoạt động của người dùng (online hoặc offline) trong thời gian thực nhờ Socket.io và React Context.


- Công nghệ
  front end: react JS, javascript, tailwind CSS, daisy UI, react toastify, react router dom, zustand, socket.io client
  back end: node JS, express, bcryptjs, cookie-parser, cross-env, dotenv, jsonwebtoken, socket.io, mongoose, nodemon, babel
