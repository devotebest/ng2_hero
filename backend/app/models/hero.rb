class Hero < ApplicationRecord
    def self.search(keywords)
        where("name LIKE ?", "%#{keywords}%")
    end
end
