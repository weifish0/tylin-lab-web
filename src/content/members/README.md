# 如何新增實驗室成員 (How to Add Lab Members)

本專案使用 Astro 的 **Content Collections** 功能來管理成員資料。所有的成員資料目前都集中統一放在 `list.md` 檔案中，這讓您可以直接透過編寫該檔案來新增、修改或刪除成員，變更會自動反映在網站上（`/members` 頁面）。

## 📁 檔案與圖片路徑定義

1. **成員資料 (Markdown)** 
   - **路徑**：`src/content/members/list.md`
   - 這個檔案包含全部的實驗室成員列表。

2. **成員照片**
   - **路徑**：`public/assets/members/`
   - **格式**：推薦使用 `.jpg` 或 `.png`
   - **命名規範**：全小寫英文加連字號，例如：`john-doe.jpg`，方便對應。
   - **尺寸**：照片在網頁上會呈長方形比例（寬 160px，高 192px 以上），建議圖片比例為 **5:6** 或 **3:4** 的直式人像照。

---

## 📝 新增成員的工作流程 (Workflow)

要在網站上新增一位成員，請依照以下步驟進行：

### 步驟一：準備照片
將成員的照片命名好（例如 `john-doe.jpg`），並拖曳放入專案的 `public/assets/members/` 資料夾內。

### 步驟二：編輯 list.md 檔案
開啟 `src/content/members/list.md` 檔案。

### 步驟三：新增成員資料
在檔案最上方的 `members:` 列表下，依照相同的格式加入新的成員資料。注意縮排必須與其它項目保持一致：

```yaml
  - name: John Doe (約翰·杜)
    role: Postdoc
    team: Battery
    email: john.doe@email.com
    researchFocus:
      - Anode Materials (C, Sn, Si)
      - Process Design & Setup for Recyclables
    image: /assets/members/john-doe.jpg
    order: 4
```

### 📋 欄位說明 (Frontmatter YAML)

- **`name`** (必填): 成員姓名，可以包含中英文。
- **`role`** (必填): 成員身分。頁面會根據此欄位自動分類。支援的選項包含：
  - `Postdoc` (博士後研究員)
  - `Ph.D. Students` (博士生)
  - `Master Students` (碩士生)
  - `Undergraduate Researchers` (專題生)
  - `Visiting Students` (訪問學生)
  - `Alumni` (校友)
- **`team`** (選填): 所屬實驗室小組（如 `Battery`）。
- **`email`** (選填): 聯絡信箱。
- **`researchFocus`** (選填): 研究重點，使用 `-` 條列式列出。
- **`image`** (選填): 照片的路徑（請以 `/assets/members/` 開頭）。如果尚未有照片，可以刪除此行或留空，系統會自動顯示預設的頭像。
- **`order`** (選填): 數字，用來控制同一分類內的排序（數字越小越排在前面）。

完成後，存檔即可！網站的 Members 頁面會自動讀取 `list.md`，並更新顯示的成員名單。
