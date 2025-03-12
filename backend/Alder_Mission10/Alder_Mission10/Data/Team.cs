using System.ComponentModel.DataAnnotations;

namespace Alder_Mission10.Data
{
    public class Team
    {
        [Key]
        public int TeamID { get; set; }
        [Required]
        public string TeamName { get; set; }
        public int? CaptainID { get; set; }
    }
}
